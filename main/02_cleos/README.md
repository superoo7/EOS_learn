alias cleos='docker exec eosio /opt/eosio/bin/cleos --wallet-url http://localhost:8888'
# Cleos

cleos is a cli tool that used to interact REST API by nodeos.


# Create alias

create alias of cleos into .bashrc or .bash_profile or .zshrc

```
alias cleos='docker exec eosio /opt/eosio/bin/cleos --wallet-url http://localhost:8888'
```

but for my case, I name my alias as dcleos, which stands for docker cleos, because I had cleos installed on my pc already.

# Create wallet

run command in `create_wallet.sh`, and a master key will be generated for 'default' account.

# list all wallets

```sh
$ dcleos wallet list
Wallets:
[
  "default *"
]
```

asterik '*' indicate that it is unlocked.

# lock

```sh
$ dcleos wallet lock
``` 


# unlock

```sh
$ dcleos wallet unlock
``` 

# Generate EOSIO keys

You can generate a private and public key pair by using:

```sh
$ dcleos create key
```

But these keys has no authority.


# Add authority to the key

```sh
$ dcleos wallet import PRIVATE_KEY
```

then, check with `dcleos wallet keys`.

# Create an account

## Kill keosd

```sh
$ docker exec eosio pkill keosd
```

## Restart keosd at localhost:8899

```sh
$ docker exec eosio keosd --http-server-address=localhost:8899 &
```

## Creaete account

Nodeos need to have `eosio::chain_api_plugin` and `eosio::account_history_api_plugin` plugin

```sh
$ dcleos -u http://localhost:8899 create account eosio myaccount ${public_key_1} ${public_key_2}
```