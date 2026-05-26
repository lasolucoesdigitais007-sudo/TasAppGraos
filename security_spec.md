# Security Specification & "Dirty Dozen" Payloads For Tas Grãos

## 1. Data Invariants
1. Only authenticated managers with the verified email `lasolucoesdigitais007@gmail.com` are allowed to write, update, or delete records in `products`, `promotions`, `banners`, and `categories`.
2. Normal users/guests can read/list `products`, `promotions`, `banners`, and `categories` as long as their fields are valid, but are blocked from any write/update/delete operation.
3. Users can only write and update their own `users/{userId}` documents (where `userId == request.auth.uid`). They are strictly forbidden from setting their own `role` field to `admin`.
4. The immutable `createdAt` and `email` properties can never be modified. All update requests must also validate strict datatypes and positive numeric ranges (e.g., matching prices, valid image URLs, and non-empty name strings).

---

## 2. The "Dirty Dozen" Payloads

### Payload 1: Anonymous Create Product Attack
* **Target Path**: `/products/evil-seed-col`
* **Vulnerability Target**: Integrity (allowing unauthenticated writes)
* **Auth**: null (Unauthenticated)
```json
{
  "id": "evil-seed-col",
  "name": "Sementes Macabras",
  "category": "Grãos",
  "pricePer100g": 10.0,
  "stock": 100,
  "stockUnit": "kg",
  "isActive": true
}
```

### Payload 2: Normal Client Create Product Attack
* **Target Path**: `/products/fake-premium-grains`
* **Vulnerability Target**: Authorization Escalation (non-admin writing a product)
* **Auth**: `uid: "normal_user_id_123", email: "hacker@gmail.com"`
```json
{
  "id": "fake-premium-grains",
  "name": "Grains Free For All",
  "category": "Grãos",
  "pricePer100g": 0.01,
  "stock": 99999,
  "stockUnit": "kg",
  "isActive": true
}
```

### Payload 3: Privilege Escalation on Creation
* **Target Path**: `/users/hacker_uid`
* **Vulnerability Target**: Role Promotion (self-assigning admin role)
* **Auth**: `uid: "hacker_uid", email: "hacker@gmail.com"`
```json
{
  "uid": "hacker_uid",
  "name": "Super Hacker",
  "email": "hacker@gmail.com",
  "role": "admin"
}
```

### Payload 4: Privilege Escalation via Update
* **Target Path**: `/users/client_uid`
* **Vulnerability Target**: Role Promotion on existing user document
* **Auth**: `uid: "client_uid", email: "client@gmail.com"`
* **Action**: Update `role` from `"cliente"` to `"admin"`.
```json
{
  "role": "admin"
}
```

### Payload 5: Spoofed Admin Email (Unverified)
* **Target Path**: `/products/spoofed-product`
* **Vulnerability Target**: Email Identity Impersonation (using admin email without verification)
* **Auth**: `uid: "spoofed_uid", email: "lasolucoesdigitais007@gmail.com", email_verified: false`
```json
{
  "id": "spoofed-product",
  "name": "Spoofed Product",
  "category": "Seeds",
  "pricePer100g": 5.0,
  "stock": 10,
  "stockUnit": "g",
  "isActive": true
}
```

### Payload 6: Malicious Admin Over-sized String Attack
* **Target Path**: `/products/bloated-prod`
* **Vulnerability Target**: Resource Exhaustion (Denial of Wallet via extremely large names)
* **Auth**: `uid: "admin_uid", email: "lasolucoesdigitais007@gmail.com", email_verified: true`
```json
{
  "id": "bloated-prod",
  "name": "[A string of 1MB characters...]",
  "category": "Grãos",
  "pricePer100g": 1.50,
  "stock": 10,
  "stockUnit": "g",
  "isActive": true
}
```

### Payload 7: Negative Price Product Attack
* **Target Path**: `/products/negative-bege`
* **Vulnerability Target**: Out-Of-Bounds Negative Values (causing logical flaws)
* **Auth**: `uid: "admin_uid", email: "lasolucoesdigitais007@gmail.com", email_verified: true`
```json
{
  "id": "negative-bege",
  "name": "Castanhas Negativas",
  "category": "Castanhas",
  "pricePer100g": -25.50,
  "stock": -5,
  "stockUnit": "kg",
  "isActive": true
}
```

### Payload 8: Anonymous Delete Product Attack
* **Target Path**: `/products/best_seller_chia`
* **Vulnerability Target**: Authorization Deficit (unauthorized destruction of catalog)
* **Auth**: null (Unauthenticated)
* **Action**: delete

### Payload 9: Client Modifying Rotating Banners
* **Target Path**: `/banners/home_banner_01`
* **Vulnerability Target**: Unauthorized configuration override
* **Auth**: `uid: "client_uid_34", email: "client34@gmail.com"`
```json
{
  "id": "home_banner_01",
  "title": "Unsafe Client Takeover",
  "desc": "Defaced by client",
  "tag": "hacker",
  "image": "https://attacker.site/image.png",
  "isActive": true
}
```

### Payload 10: Modifying Other Users Private Profile
* **Target Path**: `/users/legit_user_uid`
* **Vulnerability Target**: Cross-tenant data tampering
* **Auth**: `uid: "attacker_user_uid", email: "attacker@gmail.com"`
```json
{
  "name": "Defaced Name"
}
```

### Payload 11: Invalid Stock Unit Type Attack
* **Target Path**: `/products/bad-unit-prod`
* **Vulnerability Target**: Schema and Enumeration validation failure
* **Auth**: `uid: "admin_uid", email: "lasolucoesdigitais007@gmail.com", email_verified: true`
```json
{
  "id": "bad-unit-prod",
  "name": "Aveia Especial",
  "category": "Aveias",
  "pricePer100g": 4.50,
  "stock": 50,
  "stockUnit": "invalid_unit_here",
  "isActive": true
}
```

### Payload 12: Invalid Format Promotion Validation Fail
* **Target Path**: `/promotions/invalid-discount`
* **Vulnerability Target**: Out-Of-Bounds Promotion Percentage (>100% discount)
* **Auth**: `uid: "admin_uid", email: "lasolucoesdigitais007@gmail.com", email_verified: true`
```json
{
  "id": "invalid-discount",
  "title": "Super Erro 150% Desconto",
  "discountPercent": 150,
  "bannerUrl": "https://images.unsplash.com/photo-1",
  "selectedProductIds": ["prod1"],
  "expiryDate": "2026-12-31",
  "isActive": true
}
```

---

## 3. Test Runner Concept (Verifying Permisssion Denied)
These payloads have been verified against the secure rules declared below. The fortress `firestore.rules` enforces that each of these 12 operations yields standard Firebase `PERMISSION_DENIED` errors due to strict role authorization validation, verification checks, and type/range schema guards.
