import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AdminFeeReceiverUpdated,
  AdminFeeUpdated,
  ERC20Permit,
  ERC721Permit,
  LoanLiquidated,
  LoanRepaid,
  LoanStarted,
  MaxBorrowDurationUpdated,
  MinBorrowDurationUpdated,
  NonceCancelled,
  Paused,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TimeStampCancelled,
  Unpaused,
  UpdateStatus
} from "../generated/XY3/XY3"

export function createAdminFeeReceiverUpdatedEvent(
  param0: Address
): AdminFeeReceiverUpdated {
  let adminFeeReceiverUpdatedEvent = changetype<AdminFeeReceiverUpdated>(
    newMockEvent()
  )

  adminFeeReceiverUpdatedEvent.parameters = new Array()

  adminFeeReceiverUpdatedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )

  return adminFeeReceiverUpdatedEvent
}

export function createAdminFeeUpdatedEvent(newAdminFee: i32): AdminFeeUpdated {
  let adminFeeUpdatedEvent = changetype<AdminFeeUpdated>(newMockEvent())

  adminFeeUpdatedEvent.parameters = new Array()

  adminFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newAdminFee))
    )
  )

  return adminFeeUpdatedEvent
}

export function createERC20PermitEvent(
  erc20Contract: Address,
  isPermitted: boolean
): ERC20Permit {
  let erc20PermitEvent = changetype<ERC20Permit>(newMockEvent())

  erc20PermitEvent.parameters = new Array()

  erc20PermitEvent.parameters.push(
    new ethereum.EventParam(
      "erc20Contract",
      ethereum.Value.fromAddress(erc20Contract)
    )
  )
  erc20PermitEvent.parameters.push(
    new ethereum.EventParam(
      "isPermitted",
      ethereum.Value.fromBoolean(isPermitted)
    )
  )

  return erc20PermitEvent
}

export function createERC721PermitEvent(
  erc721Contract: Address,
  isPermitted: boolean
): ERC721Permit {
  let erc721PermitEvent = changetype<ERC721Permit>(newMockEvent())

  erc721PermitEvent.parameters = new Array()

  erc721PermitEvent.parameters.push(
    new ethereum.EventParam(
      "erc721Contract",
      ethereum.Value.fromAddress(erc721Contract)
    )
  )
  erc721PermitEvent.parameters.push(
    new ethereum.EventParam(
      "isPermitted",
      ethereum.Value.fromBoolean(isPermitted)
    )
  )

  return erc721PermitEvent
}

export function createLoanLiquidatedEvent(
  loanId: BigInt,
  borrower: Address,
  lender: Address,
  borrowAmount: BigInt,
  nftTokenId: BigInt,
  loanMaturityDate: BigInt,
  loanLiquidationDate: BigInt,
  nftAsset: Address
): LoanLiquidated {
  let loanLiquidatedEvent = changetype<LoanLiquidated>(newMockEvent())

  loanLiquidatedEvent.parameters = new Array()

  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftTokenId",
      ethereum.Value.fromUnsignedBigInt(nftTokenId)
    )
  )
  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanMaturityDate",
      ethereum.Value.fromUnsignedBigInt(loanMaturityDate)
    )
  )
  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanLiquidationDate",
      ethereum.Value.fromUnsignedBigInt(loanLiquidationDate)
    )
  )
  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam("nftAsset", ethereum.Value.fromAddress(nftAsset))
  )

  return loanLiquidatedEvent
}

export function createLoanRepaidEvent(
  loanId: BigInt,
  borrower: Address,
  lender: Address,
  borrowAmount: BigInt,
  nftTokenId: BigInt,
  repayAmount: BigInt,
  adminFee: BigInt,
  nftAsset: Address,
  borrowAsset: Address
): LoanRepaid {
  let loanRepaidEvent = changetype<LoanRepaid>(newMockEvent())

  loanRepaidEvent.parameters = new Array()

  loanRepaidEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanRepaidEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanRepaidEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  loanRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "nftTokenId",
      ethereum.Value.fromUnsignedBigInt(nftTokenId)
    )
  )
  loanRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  loanRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "adminFee",
      ethereum.Value.fromUnsignedBigInt(adminFee)
    )
  )
  loanRepaidEvent.parameters.push(
    new ethereum.EventParam("nftAsset", ethereum.Value.fromAddress(nftAsset))
  )
  loanRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAsset",
      ethereum.Value.fromAddress(borrowAsset)
    )
  )

  return loanRepaidEvent
}

export function createLoanStartedEvent(
  loanId: BigInt,
  borrower: Address,
  lender: Address,
  nonce: BigInt,
  loanDetail: ethereum.Tuple
): LoanStarted {
  let loanStartedEvent = changetype<LoanStarted>(newMockEvent())

  loanStartedEvent.parameters = new Array()

  loanStartedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanStartedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanStartedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanStartedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  loanStartedEvent.parameters.push(
    new ethereum.EventParam("loanDetail", ethereum.Value.fromTuple(loanDetail))
  )

  return loanStartedEvent
}

export function createMaxBorrowDurationUpdatedEvent(
  newMaxBorrowDuration: BigInt
): MaxBorrowDurationUpdated {
  let maxBorrowDurationUpdatedEvent = changetype<MaxBorrowDurationUpdated>(
    newMockEvent()
  )

  maxBorrowDurationUpdatedEvent.parameters = new Array()

  maxBorrowDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBorrowDuration",
      ethereum.Value.fromUnsignedBigInt(newMaxBorrowDuration)
    )
  )

  return maxBorrowDurationUpdatedEvent
}

export function createMinBorrowDurationUpdatedEvent(
  newMinBorrowDuration: BigInt
): MinBorrowDurationUpdated {
  let minBorrowDurationUpdatedEvent = changetype<MinBorrowDurationUpdated>(
    newMockEvent()
  )

  minBorrowDurationUpdatedEvent.parameters = new Array()

  minBorrowDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newMinBorrowDuration",
      ethereum.Value.fromUnsignedBigInt(newMinBorrowDuration)
    )
  )

  return minBorrowDurationUpdatedEvent
}

export function createNonceCancelledEvent(
  lender: Address,
  nonce: BigInt
): NonceCancelled {
  let nonceCancelledEvent = changetype<NonceCancelled>(newMockEvent())

  nonceCancelledEvent.parameters = new Array()

  nonceCancelledEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  nonceCancelledEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return nonceCancelledEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTimeStampCancelledEvent(
  lender: Address,
  timestamp: BigInt
): TimeStampCancelled {
  let timeStampCancelledEvent = changetype<TimeStampCancelled>(newMockEvent())

  timeStampCancelledEvent.parameters = new Array()

  timeStampCancelledEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  timeStampCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return timeStampCancelledEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpdateStatusEvent(
  loanId: BigInt,
  xy3NftId: BigInt,
  newStatus: i32
): UpdateStatus {
  let updateStatusEvent = changetype<UpdateStatus>(newMockEvent())

  updateStatusEvent.parameters = new Array()

  updateStatusEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  updateStatusEvent.parameters.push(
    new ethereum.EventParam(
      "xy3NftId",
      ethereum.Value.fromUnsignedBigInt(xy3NftId)
    )
  )
  updateStatusEvent.parameters.push(
    new ethereum.EventParam(
      "newStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newStatus))
    )
  )

  return updateStatusEvent
}
