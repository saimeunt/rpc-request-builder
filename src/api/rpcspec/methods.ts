const STARKNET_JS_PREFIX = `// Installation Instructions: https://https://www.starknetjs.com/
const { RpcProvider } = require('starknet');

const provider = new RpcProvider({
    nodeUrl: "https://free-rpc.nethermind.io/mainnet-juno/"
})

`;

const block_id = {
  placeholder: "latest",
  index: 0,
  description:
    "The hash of the requested block, or number (height) of the requested block, or a block tag",
  oneOf: [
    { name: "block_tag", enum: ["latest", "pending"], placeholder: "latest" },
    {
      name: "block_hash",
      pattern: "0x[0-9a-fA-F]{64}",
      placeholder:
        "0x1926fe58c6750d786c352d448f3318e675ab1e866a9a728c66fa873675eb9fd",
    },
    { name: "block_number", pattern: "[0-9]+", placeholder: 474703 },
  ],
};

const contract_address = {
  placeholder:
    "0x124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49",
  description: "The address of the contract",
};

const l1_address = {
  placeholder: "0xc662c410c0ecf747543f5ba90660f6abebd9c8c4",
  description: "The address of the l1 contract sending the message",
};

const transaction_hash = {
  placeholder:
    "0x7641514f46a77013e80215cdce2e55d5aca49c13428b885c7ecb9d3ddb4ab11",
  description: "The hash of the requested transaction",
};

const entry_point_selector = {
  placeholder: "name",
  description: "The name of the function to call",
};

const calldata = {
  placeholder: [],
  description: "The calldata to send with the function call (e.g. 0x1,0x2)",
};

const class_hash = {
  placeholder:
    "0x3131fa018d520a037686ce3efddeab8f28895662f019ca3ca18a626650f7d1e",
  description: "The hash of the contract class",
};

const functionCall = {
  contract_address,
  entry_point_selector,
  calldata,
};

const version0 = {
  placeholder: "0x0",
  description: "The version of the transaction",
};

const version1 = {
  placeholder: "0x1",
  description: "The version of the transaction",
};

const max_fee = {
  placeholder: "0x0",
  description: "The maximum fee the sender is willing to pay",
};

const signature = {
  placeholder: [
    "0x1d4231646034435917d3513cafd6e22ce3ca9a783357137e32b7f52827a9f98",
    "0x61c0b5bae9710c514817c772146dd7509517d2c47fd9bf622370215485ee5af",
  ],
  description: "A transaction signature (e.g. 0x1,0x2)",
};

const nonce = {
  placeholder: "0x0",
  description: "A field element. represented by at most 63 hex digits",
};

const resource_bounds_l1_gas_max_amount = {
  placeholder: "0x0",
  description: "The max amount of L1 gas used in this tx",
};

const resource_bounds_l1_gas_max_price_per_unit = {
  placeholder: "0x0",
  description: "The max price per unit of L1 gas used in this tx",
};

const resource_bounds_l2_gas_max_amount = {
  placeholder: "0x0",
  description: "The max amount of L2 gas used in this tx",
};

const resource_bounds_l2_gas_max_price_per_unit = {
  placeholder: "0x0",
  description: "The max price per unit of L2 gas used in this tx",
};

const tip = {
  placeholder: "0x0",
  description: "The tip for the transaction",
};

const paymaster_data = {
  placeholder: [],
  description:
    "Data needed to allow the paymaster to pay for the transaction in native tokens",
};

const account_deployment_data = {
  placeholder: [],
  description:
    "Data needed to deploy the account contract from which this tx will be initiated",
};

const nonce_data_availability_mode = {
  placeholder: "L2",
  description:
    "The storage domain of the account's nonce (an account has a nonce per da mode)",
};

const fee_data_availability_mode = {
  placeholder: "L2",
  description:
    "The storage domain of the account's balance from which fee will be charged",
};

const contract_address_salt = {
  placeholder: "0x0",
  description: "The salt for the address of the deployed contract",
};

const constructor_calldata = {
  placeholder: [],
  description: "The parameters passed to the constructor",
};

const INVOKE_TXN_V0 = {
  type: {
    placeholder: "INVOKE",
    description: "The type of the transaction",
  },
  max_fee,
  version: version0,
  signature,
  contract_address,
  entry_point_selector,
  calldata,
};

const INVOKE_TXN_V1 = {
  type: {
    placeholder: "INVOKE",
    description: "The type of the transaction",
  },
  sender_address: contract_address,
  calldata,
  max_fee,
  version: version1,
  signature,
  nonce,
};

const BROADCASTED_INVOKE_TXN = INVOKE_TXN_V1;

const BROADCASTED_TXN = {
  placeholder: "INVOKE_V1",
  index: 0,
  description: "The type of the transaction",
  oneOf: [
    {
      name: "INVOKE_V1",
      fields: {
        sender_address: contract_address,
        calldata,
        max_fee,
        signature,
        nonce,
      },
      placeholder: "INVOKE_V1",
    },
    {
      name: "INVOKE_V3",
      fields: {
        sender_address: contract_address,
        calldata,
        signature,
        nonce,
        resource_bounds_l1_gas_max_amount,
        resource_bounds_l1_gas_max_price_per_unit,
        resource_bounds_l2_gas_max_amount,
        resource_bounds_l2_gas_max_price_per_unit,
        tip,
        paymaster_data,
        account_deployment_data,
        nonce_data_availability_mode,
        fee_data_availability_mode,
      },
      placeholder: "INVOKE_V3",
    },
    {
      name: "DECLARE_V2",
      fields: {
        sender_address: contract_address,
        max_fee,
        signature,
        nonce,
      },
      placeholder: "DECLARE_V2",
    },
    {
      name: "DECLARE_V3",
      fields: {
        sender_address: contract_address,
        signature,
        nonce,
        resource_bounds_l1_gas_max_amount,
        resource_bounds_l1_gas_max_price_per_unit,
        resource_bounds_l2_gas_max_amount,
        resource_bounds_l2_gas_max_price_per_unit,
        tip,
        paymaster_data,
        account_deployment_data,
        nonce_data_availability_mode,
        fee_data_availability_mode,
      },
      placeholder: "DECLARE_V3",
    },
    {
      name: "DEPLOY_ACCOUNT_V1",
      fields: {
        max_fee,
        signature,
        nonce,
        contract_address_salt,
        constructor_calldata,
        class_hash,
      },
      placeholder: "DEPLOY_ACCOUNT_V1",
    },
    {
      name: "DEPLOY_ACCOUNT_V3",
      fields: {
        signature,
        nonce,
        contract_address_salt,
        constructor_calldata,
        class_hash,
        resource_bounds_l1_gas_max_amount,
        resource_bounds_l1_gas_max_price_per_unit,
        resource_bounds_l2_gas_max_amount,
        resource_bounds_l2_gas_max_price_per_unit,
        tip,
        paymaster_data,
        nonce_data_availability_mode,
        fee_data_availability_mode,
      },
      placeholder: "DEPLOY_ACCOUNT_V3",
    },
  ],
};

const DEPLOY_ACCOUNT_TXN_V1 = {
  type: {
    placeholder: "DEPLOY_ACCOUNT",
    description: "The type of the transaction",
  },
  max_fee,
  version: version1,
  signature: {
    placeholder: [
      "0xd96bc7affb5648b601ddb49e9fd23f6ebfe59375e2ce5dd06b7db638d21b71",
      "0x6582c1512c8515254a52deb5fef1320d4f5dd0cb8352b260a4e7a90c61510ba",
      "0x5dec330eebf36c8672b60db4a718d44762d3ae6d1333e553197acb47ee5a062",
      "0x0",
      "0x0",
      "0x0",
      "0x0",
      "0x0",
      "0x0",
      "0x0",
    ],
    description: "A transaction signature",
  },
  nonce,
  contract_address_salt: {
    placeholder:
      "0x61fcdc5594c726dc437ddc763265853d4dce51a57e25ff1d97b3e31401c7f4c",
    description: "The salt for the address of the deployed contract",
  },
  constructor_calldata: {
    placeholder: [
      "0x5aa23d5bb71ddaa783da7ea79d405315bafa7cf0387a74f4593578c3e9e6570",
      "0x2dd76e7ad84dbed81c314ffe5e7a7cacfb8f4836f01af4e913f275f89a3de1a",
      "0x1",
      "0x61fcdc5594c726dc437ddc763265853d4dce51a57e25ff1d97b3e31401c7f4c",
    ],
    description: "The parameters passed to the constructor",
  },
  class_hash,
};

const BROADCASTED_DEPLOY_ACCOUNT_TXN = DEPLOY_ACCOUNT_TXN_V1;

const ReadMethods = [
  // Returns the version of the Starknet JSON-RPC specification being used
  {
    name: "starknet_specVersion",
    params: [],
    starknetJs: `${STARKNET_JS_PREFIX}provider.getSpecVersion().then(specVersion => {
    console.log(specVersion);
});
    `,
    starknetGo: `package main

    import (
      "context"
      "fmt"
      "log"
    
      "github.com/NethermindEth/starknet.go/rpc"
    )
    
    func main() {
      rpcUrl := "https://free-rpc.nethermind.io/mainnet-juno/"
    
      client, err := rpc.NewClient(rpcUrl)
      if err != nil {
        log.Fatal(err)
      }
    
      provider := rpc.NewProvider(client)
      specVersion, err := provider.SpecVersion(context.Background())
      if err != nil {
        log.Fatal(err)
      }
    
      fmt.Println("SpecVersion:", specVersion)
    }`,
    starknetRs: `use starknet::{
  providers::{
    jsonrpc::{HttpTransport, JsonRpcClient},
    Provider, Url,
  },
};
    
#[tokio::main]
async fn main() {
  let provider = JsonRpcClient::new(HttpTransport::new(
    Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
  ));
 
  let result = provider.
    spec_version()
    .await;
  match result {
    Ok(spec_version) => {
      println!("{spec_version:#?}");
    }
    Err(err) => {
      eprintln!("Error: {err}");
    }
  }
}
`,
  },

  // Get block information with transaction hashes given the block id
  {
    name: "starknet_getBlockWithTxHashes",
    params: {
      block_id,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getBlockWithTxHashes("latest").then(block => {
  console.log(block);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
      core::types::{BlockId, BlockTag},
      providers::{
          jsonrpc::{HttpTransport, JsonRpcClient},
          Provider, Url,
      },
  };
  
 
  #[tokio::main]
  async fn main() {
      
      let provider = JsonRpcClient::new(HttpTransport::new(
          Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
      ));
      
      let result = provider.get_block_with_tx_hashes(BlockId::Tag(BlockTag::Latest)).await;

      match result {
          Ok(block) => {
              println!("{block:#?}");
          }
          Err(err) => {
              eprintln!("Error: {err}");
          }
      }
      
  }
  `,
  },

  // Get block information with full transactions given the block id
  {
    name: "starknet_getBlockWithTxs",
    params: {
      block_id,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getBlockWithTxs("latest").then(block => {
  console.log(block);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
      core::types::{BlockId, BlockTag},
      providers::{
        jsonrpc::{HttpTransport, JsonRpcClient},
        Provider, Url,
      },
  };
  
  #[tokio::main]
  async fn main() {
      let provider = JsonRpcClient::new(HttpTransport::new(
          Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
      ));
  
      let result = provider.get_block_with_txs(BlockId::Tag(BlockTag::Latest)).await;
      
      match result {
          Ok(block) => {
              println!("{block:#?}");
          }
          Err(err) => {
              eprintln!("Error: {err}");
          }
      
      }
  }
  `,
  },

  // Get the information about the result of executing the requested block
  {
    name: "starknet_getStateUpdate",
    params: {
      block_id,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getBlockStateUpdate("latest").then(stateUpdate => {
    console.log(stateUpdate);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
      core::types::{BlockId, BlockTag,MaybePendingStateUpdate},
      providers::{
        jsonrpc::{HttpTransport, JsonRpcClient},
        Provider, Url,
      }, 
     };
  
  #[tokio::main]
  async fn main() {
      let provider = JsonRpcClient::new(HttpTransport::new(
          Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
      ));
  
      let result = provider.get_state_update(BlockId::Tag(BlockTag::Latest)).await;
      match result {
          Ok(state_update) => {
              println!("{state_update:#?}");
          }
          Err(err) => {
              eprintln!("Error: {err}");
          }
      }
    }`,
  },

  // Get the value of the storage at the given address and key
  {
    name: "starknet_getStorageAt",
    params: {
      contract_address,
      key: {
        placeholder:
          "0x1001e85047571380eed1d7e1cc5a9af6a707b3d65789bb1702c7d680e5e87e",
        description: "The key to the storage value for the given contract",
      },
      block_id,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getStorageAt("0x124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49", "0x1001e85047571380eed1d7e1cc5a9af6a707b3d65789bb1702c7d680e5e87e", "latest").then(storage => {
    console.log(storage);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
      core::types::{BlockId,BlockTag},
      macros::felt,
      providers::{
        jsonrpc::{HttpTransport, JsonRpcClient},
        Provider, Url,
    },
  };
  
  #[tokio::main]
  async fn main() {
      let provider = JsonRpcClient::new(HttpTransport::new(
          Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
      ));
  
      let result = provider.get_storage_at(felt!("0x124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49"),felt!("0x1001e85047571380eed1d7e1cc5a9af6a707b3d65789bb1702c7d680e5e87e"),BlockId::Tag(BlockTag::Latest)).await;
      match result {
          Ok(storage) => {
              println!("{storage:#?}");
          }
          Err(err) => {
              eprintln!("Error: {err}");
          }
      }
  }
    `,
  },

  // Gets the transaction status (possibly reflecting that the tx is still in the mempool, or dropped from it)
  {
    name: "starknet_getTransactionStatus",
    params: {
      transaction_hash,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getTransactionStatus("0x7641514f46a77013e80215cdce2e55d5aca49c13428b885c7ecb9d3ddb4ab11").then(transactionStatus => {
    console.log(transactionStatus);
});
    `,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Get the details and status of a submitted transaction
  {
    name: "starknet_getTransactionByHash",
    params: {
      transaction_hash,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getTransactionByHash("0x7641514f46a77013e80215cdce2e55d5aca49c13428b885c7ecb9d3ddb4ab11").then(transaction => {
  console.log(transaction);
});
    `,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Get the details of a transaction by a given block id and index
  {
    name: "starknet_getTransactionByBlockIdAndIndex",
    params: {
      block_id,
      index: {
        placeholder: 0,
        description: "The index of the transaction in the block",
      },
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getTransactionByBlockIdAndIndex("latest", 0).then(transaction => {
  console.log(transaction);
});
    `,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Get the transaction receipt by the transaction hash
  {
    name: "starknet_getTransactionReceipt",
    params: {
      transaction_hash,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getTransactionReceipt("0x7641514f46a77013e80215cdce2e55d5aca49c13428b885c7ecb9d3ddb4ab11").then(transactionReceipt => {
  console.log(transactionReceipt);
});
    `,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Get the contract class definition in the given block associated with the given hash
  {
    name: "starknet_getClass",
    params: {
      block_id,
      class_hash,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getClass("latest", "0x07fc0b6ecc96a698cdac8c4ae447816d73bffdd9603faacffc0a8047149d02ed").then(class => {
    console.log(class);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
  core::types::{BlockId, BlockTag},
  macros::felt,
  providers::{
    jsonrpc::{HttpTransport, JsonRpcClient},
    Provider, Url,
  },
};

#[tokio::main]
async fn main() {
  let provider = JsonRpcClient::new(HttpTransport::new(
    Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
  ));
  
  let result = provider
    .get_class(BlockId::Tag(BlockTag::Latest), felt!("0x3131fa018d520a037686ce3efddeab8f28895662f019ca3ca18a626650f7d1e"))
    .await;
  match result {
    Ok(contract_class) => {
      println!("{contract_class:#?}");
    }
    Err(err) => {
      eprintln!("Error: {err}");
    }
  }
}
`,
  },

  // Get the contract class hash in the given block for the contract deployed at the given address
  {
    name: "starknet_getClassHashAt",
    params: {
      block_id,
      contract_address,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getClassHashAt("latest", "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7").then(classHash => {
    console.log(classHash);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
  core::types::{BlockId, BlockTag},
  macros::felt,
  providers::{
    jsonrpc::{HttpTransport, JsonRpcClient},
    Provider, Url,
  },
};

#[tokio::main]
async fn main() {
  let provider = JsonRpcClient::new(HttpTransport::new(
    Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
  ));
      
  let result = provider
    .get_class_hash_at(BlockId::Tag(BlockTag::Latest), felt!("0x124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49"))
    .await;
  match result {
    Ok(class_hash) => {
      println!("{class_hash:#?}");
    }
    Err(err) => {
      eprintln!("Error: {err}");
    }
  }
}
`,
  },

  // Get the contract class definition in the given block at the given address
  {
    name: "starknet_getClassAt",
    params: {
      block_id,
      contract_address,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getClassAt("latest", "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7").then(class => {
    console.log(class);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
  core::types::{BlockId, BlockTag},
  macros::felt,
  providers::{
    jsonrpc::{HttpTransport, JsonRpcClient},
    Provider, Url,
  },
};

#[tokio::main]
async fn main() {
  let provider = JsonRpcClient::new(HttpTransport::new(
    Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
  ));
          
  let result = provider
    .get_class_at(BlockId::Tag(BlockTag::Latest), felt!("0x124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49"))
    .await;
  match result {
    Ok(contract_class) => {
      println!("{contract_class:#?}");
    }
    Err(err) => {
      eprintln!("Error: {err}");
    }
  }
}
`,
  },

  // Get the number of transactions in a block given a block id
  {
    name: "starknet_getBlockTransactionCount",
    params: {
      block_id,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getBlockTransactionCount("latest").then(transactionCount => {
    console.log(transactionCount);
});
    `,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Call a StarkNet function without creating a StarkNet transaction
  {
    name: "starknet_call",
    params: {
      request: functionCall,
      block_id,
    },
    starknetJs: ``,
    starknetGo: ``,
    starknetRs: `use starknet::{
  core::types::{FunctionCall, BlockId, BlockTag},
  macros::felt,
  providers::{
    jsonrpc::{HttpTransport, JsonRpcClient},
    Provider, Url,
  },
};

#[tokio::main]
async fn main() {
  let provider = JsonRpcClient::new(HttpTransport::new(
    Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
  ));

  let result = provider
    .call(
      FunctionCall {
        contract_address: felt!("0x124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49"),
        entry_point_selector: felt!("0x361458367e696363fbcc70777d07ebbd2394e89fd0adcaf147faccd1d294d60"),
        calldata: vec![],
      },
      BlockId::Tag(BlockTag::Latest),
    )
    .await;
  match result {
    Ok(call_result) => {
      println!("{call_result:#?}");
    }
    Err(err) => {
      eprintln!("Error: {err}");
    }
  }
}
`,
  },

  // Estimate the fee for StarkNet transactions
  {
    name: "starknet_estimateFee",
    params: {
      request: [BROADCASTED_INVOKE_TXN], //TODO:
      simulation_flags: [
        {
          placeholder: "SKIP_VALIDATE",
          description:
            "Flags that indicate how to simulate a given transaction. By default, the sequencer behavior is replicated locally",
        },
      ],
      block_id,
    },
    starknetJs: ``,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Estimate the L2 fee of a message sent on L1
  {
    name: "starknet_estimateMessageFee",
    params: {
      message: {
        from_address: l1_address,
        to_address: contract_address,
        entry_point_selector,
        payload: {
          placeholder: [],
          description: "The payload of the message",
        },
      },
      block_id,
    },
    starknetJs: ``,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Get the most recent accepted block number
  {
    name: "starknet_blockNumber",
    params: [],
    starknetJs: `${STARKNET_JS_PREFIX}provider.getBlockNumber().then(blockNumber => {
    console.log(blockNumber);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::providers::{
      jsonrpc::{HttpTransport, JsonRpcClient},
      Provider, Url,
    };
  
   #[tokio::main]
   async fn main() {
      let provider = JsonRpcClient::new(HttpTransport::new(
          Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
      ));
  
      let result = provider.block_number().await;
      
      match result {
          Ok(block_number) => {
              println!("{block_number:#?}");
          }
          Err(err) => {
              eprintln!("Error: {err}");
          }
      }
   }
    `,
  },

  // Get the most recent accepted block hash and number
  {
    name: "starknet_blockHashAndNumber",
    params: [],
    starknetJs: `${STARKNET_JS_PREFIX}provider.getBlockLatestAccepted().then(blockHashAndNumber => {
    console.log(blockHashAndNumber);
    });
    `,
    starknetGo: ``,
    starknetRs: `use starknet::providers::{
      jsonrpc::{HttpTransport, JsonRpcClient},
      Provider, Url,
    };
  
  #[tokio::main]
  async fn main() {
      let provider = JsonRpcClient::new(HttpTransport::new(
          Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
      ));
  
      let result = provider.block_hash_and_number().await;
      match result {
          Ok(block_hash_and_number) => {
              println!("{block_hash_and_number:#?}");
          }
          Err(err) => {
              eprintln!("Error: {err}");
          }
      
      }
    }
  `,
  },

  // Return the currently configured StarkNet chain id
  {
    name: "starknet_chainId",
    params: [],
    starknetJs: `${STARKNET_JS_PREFIX}provider.getChainId().then(chainId => {
    console.log(chainId);
});
    `,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Returns an object about the sync status, or false if the node is not syncing
  {
    name: "starknet_syncing",
    params: [],
    starknetJs: `${STARKNET_JS_PREFIX}provider.getSyncingStats().then(syncing => {
    console.log(syncing);
});
    `,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Returns all events matching the given filter
  {
    name: "starknet_getEvents",
    params: {
      filter: {
        from_block: block_id,
        to_block: block_id,
        address: contract_address,
        keys: {
          placeholder: [
            [
              "0x1001e85047571380eed1d7e1cc5a9af6a707b3d65789bb1702c7d680e5e87e",
            ],
          ],
          description: "The key to the storage value for the given contract",
          type: "array",
        },
        continuation_token: {
          placeholder: "",
          description:
            "The token returned from the previous query. If no token is provided the first page is returned",
        },
        chunk_size: {
          placeholder: 2,
          description: "The number of events to return",
        },
      },
    },
    starknetJs: ``,
    starknetGo: ``,
    starknetRs: ``,
  },

  // Get the nonce associated with the given address in the given block
  {
    name: "starknet_getNonce",
    params: {
      block_id,
      contract_address,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getNonceForAddress("latest", "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7").then(nonce => {
    console.log(nonce);
});
    `,
    starknetGo: ``,
    starknetRs: ``,
  },
];

const WriteMethods = [
  // Submit a new transaction to be added to the chain
  {
    name: "starknet_addInvokeTransaction",
    params: {
      invoke_transaction: BROADCASTED_INVOKE_TXN,
    },
    starknetJs: ``,
    starknetGo: ``,
    starknetRs: ``,
  },

  //   // Submit a new class declaration transaction
  //   {
  //     name: "starknet_addDeclareTransaction",
  //     // params: {
  //     //   declare_transaction: BROADCASTED_DECLARE_TXN,
  //     // },
  //     starknetJs: ``,
  //   },

  // Submit a new deploy account transaction
  {
    name: "starknet_addDeployAccountTransaction",
    params: {
      deploy_account_transaction: BROADCASTED_DEPLOY_ACCOUNT_TXN,
    },
    starknetJs: ``,
    starknetGo: ``,
    starknetRs: ``,
  },
];

const TraceMethods = [
  // For a given executed transaction, return the trace of its execution, including internal calls
  {
    name: "starknet_traceTransaction",
    params: { transaction_hash },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getTransactionTrace("0x7641514f46a77013e80215cdce2e55d5aca49c13428b885c7ecb9d3ddb4ab11").then(transactionTrace => {
    console.log(transactionTrace);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
  macros::felt,
  providers::{
    jsonrpc::{HttpTransport, JsonRpcClient},
    Provider, Url,
  },
};

#[tokio::main]
async fn main() {
  let provider = JsonRpcClient::new(HttpTransport::new(
    Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
  ));
              
  let result = provider
    .trace_transaction(felt!("0x7641514f46a77013e80215cdce2e55d5aca49c13428b885c7ecb9d3ddb4ab11"))
    .await;
  match result {
    Ok(transaction_trace) => {
      println!("{transaction_trace:#?}");
    }
    Err(err) => {
      eprintln!("Error: {err}");
    }
  }
}
`,
  },

  // Returns the execution traces of all transactions included in the given block
  {
    name: "starknet_traceBlockTransactions",
    params: {
      block_id,
    },
    starknetJs: `${STARKNET_JS_PREFIX}provider.getBlockTransactionsTraces("latest").then(transactionTraces => {
    console.log(transactionTraces);
});
    `,
    starknetGo: ``,
    starknetRs: `use starknet::{
  core::types::{BlockId, BlockTag},
  providers::{
    jsonrpc::{HttpTransport, JsonRpcClient},
    Provider, Url,
  },
};

#[tokio::main]
async fn main() {
  let provider = JsonRpcClient::new(HttpTransport::new(
    Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
  ));
                  
  let result = provider
    .trace_block_transactions(BlockId::Tag(BlockTag::Latest))
    .await;
  match result {
    Ok(transactions_traces_with_hash) => {
      println!("{transactions_traces_with_hash:#?}");
    }
    Err(err) => {
      eprintln!("Error: {err}");
    }
  }
}
`,
  },

  // Simulate a given sequence of transactions on the requested state, and generate the execution traces. If one of the transactions is reverted, raises CONTRACT_ERROR
  {
    name: "starknet_simulateTransactions",
    params: {
      block_id,
      transactions: [BROADCASTED_TXN],
      simulation_flags: [
        {
          placeholder: "SKIP_VALIDATE",
          description:
            "describes what parts of the transaction should be executed",
        },
      ],
    },
    starknetJs: ``,
    starknetGo: ``,
    starknetRs: `use std::sync::Arc;

use starknet::{
  core::types::{
    contract::SierraClass, FieldElement, BlockId, BlockTag, BroadcastedTransaction,
    BroadcastedInvokeTransaction, BroadcastedInvokeTransactionV1, BroadcastedInvokeTransactionV3,
    BroadcastedDeclareTransaction, BroadcastedDeclareTransactionV2, BroadcastedDeclareTransactionV3,
    BroadcastedDeployAccountTransaction, BroadcastedDeployAccountTransactionV1, BroadcastedDeployAccountTransactionV3,
    DataAvailabilityMode, ResourceBoundsMapping, ResourceBounds, SimulationFlag
  },
  macros::felt,
  providers::{
      jsonrpc::{HttpTransport, JsonRpcClient},
      Provider, Url,
  },
};

#[tokio::main]
async fn main() {
  // Sierra class artifact. Output of the "starknet-compile" command
  let contract_artifact: SierraClass =
    serde_json::from_reader(std::fs::File::open("/path/to/contract/artifact.json").unwrap())
    .unwrap();
  // Class hash of the compiled CASM class from the "starknet-sierra-compile" command
  let compiled_class_hash =
    FieldElement::from_hex_be("COMPILED_CASM_CLASS_HASH_IN_HEX_HERE").unwrap();
  // We need to flatten the ABI into a string first
  let flattened_class = contract_artifact.flatten().unwrap();

  let provider = JsonRpcClient::new(HttpTransport::new(
    Url::parse("https://free-rpc.nethermind.io/mainnet-juno/").unwrap(),
  ));

  let result = provider
    .simulate_transactions(
      BlockId::Tag(BlockTag::Latest),
      vec![
        BroadcastedTransaction::Invoke(
          BroadcastedInvokeTransaction::V1(
            BroadcastedInvokeTransactionV1 {
              sender_address: felt!("0x124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49"),
              calldata: vec![],
              max_fee: felt!("0x0"),
              signature: vec![
                felt!("0x1d4231646034435917d3513cafd6e22ce3ca9a783357137e32b7f52827a9f98"),
                felt!("0x61c0b5bae9710c514817c772146dd7509517d2c47fd9bf622370215485ee5af")
              ],
              nonce: felt!("0x0"),
              is_query: true
            }
          )
        )
      ],
      vec![
        SimulationFlag::SkipValidate
      ]
    )
    .await;
  match result {
    Ok(simulated_transactions) => {
      println!("{simulated_transactions:#?}");
    }
    Err(err) => {
      eprintln!("Error: {err}");
    }
  }
}
`,
  },
];

export const Methods = [...ReadMethods, ...TraceMethods, ...WriteMethods];
export const comingSoon = [
  "starknet_addDeclareTransaction",
  "starknet_addDeployAccountTransaction",
];
