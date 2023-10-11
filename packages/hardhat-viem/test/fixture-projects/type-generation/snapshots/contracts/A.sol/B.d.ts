// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface B$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "B",
  "sourceName": "contracts/A.sol",
  "abi": [
    {
      "inputs": [],
      "name": "getB",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060b68061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a1c5191514602d575b600080fd5b60336047565b604051603e91906067565b60405180910390f35b60006002905090565b6000819050919050565b6061816050565b82525050565b6000602082019050607a6000830184605a565b9291505056fea2646970667358221220fe48236ca287d1fb02c67c759d4bbebdc9702638fef90f605955fa2db9c0049864736f6c63430008130033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c8063a1c5191514602d575b600080fd5b60336047565b604051603e91906067565b60405180910390f35b60006002905090565b6000819050919050565b6061816050565b82525050565b6000602082019050607a6000830184605a565b9291505056fea2646970667358221220fe48236ca287d1fb02c67c759d4bbebdc9702638fef90f605955fa2db9c0049864736f6c63430008130033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "contracts/A.sol:B",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<B$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "contracts/A.sol:B",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<B$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "contracts/A.sol:B",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<B$Type["abi"]>>;
}