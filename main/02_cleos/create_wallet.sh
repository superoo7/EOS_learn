#/bin/sh

# to solve alias not being recognize
shopt -s expand_aliases

alias dcleos='docker exec eosio /opt/eosio/bin/cleos --wallet-url http://localhost:8888'
dcleos wallet create