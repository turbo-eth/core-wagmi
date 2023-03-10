# @turbo-eth/core-wagmi

## Table of contents

### Functions

- [Address](modules.md#address)
- [Balance](modules.md#balance)
- [BlockNumber](modules.md#blocknumber)
- [EnsAddress](modules.md#ensaddress)
- [EnsName](modules.md#ensname)
- [WalletAddress](modules.md#walletaddress)
- [WalletBalance](modules.md#walletbalance)
- [WalletEnsName](modules.md#walletensname)
- [WalletNonce](modules.md#walletnonce)
- [trimFormattedBalance](modules.md#trimformattedbalance)
- [truncateAddress](modules.md#truncateaddress)

## Functions

### <a id="address" name="address"></a> Address

▸ **Address**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `AddressProps` |

#### Returns

`Element`

#### Defined in

components/address.tsx:14

___

### <a id="balance" name="balance"></a> Balance

▸ **Balance**(`«destructured»`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `BalanceProps` |

#### Returns

``null`` \| `Element`

#### Defined in

components/balance.tsx:13

___

### <a id="blocknumber" name="blocknumber"></a> BlockNumber

▸ **BlockNumber**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `BlockNumberProps` |

#### Returns

`Element`

#### Defined in

components/block-number.tsx:10

___

### <a id="ensaddress" name="ensaddress"></a> EnsAddress

▸ **EnsAddress**(`«destructured»`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `EnsAddressProps` |

#### Returns

``null`` \| `Element`

#### Defined in

components/ens-address.tsx:11

___

### <a id="ensname" name="ensname"></a> EnsName

▸ **EnsName**(`«destructured»`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `EnsNameProps` |

#### Returns

``null`` \| `Element`

#### Defined in

components/ens-name.tsx:12

___

### <a id="walletaddress" name="walletaddress"></a> WalletAddress

▸ **WalletAddress**(`«destructured»`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `WalletAddressProps` |

#### Returns

``null`` \| `Element`

#### Defined in

components/wallet-address.tsx:14

___

### <a id="walletbalance" name="walletbalance"></a> WalletBalance

▸ **WalletBalance**(`«destructured»`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `WalletBalanceProps` |

#### Returns

``null`` \| `Element`

#### Defined in

components/wallet-balance.tsx:11

___

### <a id="walletensname" name="walletensname"></a> WalletEnsName

▸ **WalletEnsName**(`«destructured»`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `WalletEnsNameProps` |

#### Returns

``null`` \| `Element`

#### Defined in

components/wallet-ens-name.tsx:10

___

### <a id="walletnonce" name="walletnonce"></a> WalletNonce

▸ **WalletNonce**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `WalletNonceProps` |

#### Returns

`Element`

#### Defined in

components/wallet-nonce.tsx:10

___

### <a id="trimformattedbalance" name="trimformattedbalance"></a> trimFormattedBalance

▸ **trimFormattedBalance**(`balance`, `decimals?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `balance` | `undefined` \| `string` | `undefined` |
| `decimals` | `number` | `4` |

#### Returns

`string`

#### Defined in

[utils/trimFormattedBalance.ts:1](https://github.com/turbo-eth/core-wagmi/blob/07c8042/src/utils/trimFormattedBalance.ts#L1)

___

### <a id="truncateaddress" name="truncateaddress"></a> truncateAddress

▸ **truncateAddress**(`address?`): `undefined` \| `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | `string` |  |

#### Returns

`undefined` \| `string`

#### Defined in

[utils/truncateAddress.ts:9](https://github.com/turbo-eth/core-wagmi/blob/07c8042/src/utils/truncateAddress.ts#L9)
