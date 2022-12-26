import {
  AdminFeeReceiverUpdated as AdminFeeReceiverUpdatedEvent,
  AdminFeeUpdated as AdminFeeUpdatedEvent,
  ERC20Permit as ERC20PermitEvent,
  ERC721Permit as ERC721PermitEvent,
  LoanLiquidated as LoanLiquidatedEvent,
  LoanRepaid as LoanRepaidEvent,
  LoanStarted as LoanStartedEvent,
  MaxBorrowDurationUpdated as MaxBorrowDurationUpdatedEvent,
  MinBorrowDurationUpdated as MinBorrowDurationUpdatedEvent,
  NonceCancelled as NonceCancelledEvent,
  Paused as PausedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TimeStampCancelled as TimeStampCancelledEvent,
  Unpaused as UnpausedEvent,
  UpdateStatus as UpdateStatusEvent
} from "../generated/XY3/XY3"
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
} from "../generated/schema"

export function handleAdminFeeReceiverUpdated(
  event: AdminFeeReceiverUpdatedEvent
): void {
  let entity = new AdminFeeReceiverUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0 = event.params.param0

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminFeeUpdated(event: AdminFeeUpdatedEvent): void {
  let entity = new AdminFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAdminFee = event.params.newAdminFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20Permit(event: ERC20PermitEvent): void {
  let entity = new ERC20Permit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.erc20Contract = event.params.erc20Contract
  entity.isPermitted = event.params.isPermitted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC721Permit(event: ERC721PermitEvent): void {
  let entity = new ERC721Permit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.erc721Contract = event.params.erc721Contract
  entity.isPermitted = event.params.isPermitted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanLiquidated(event: LoanLiquidatedEvent): void {
  let entity = new LoanLiquidated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.borrowAmount = event.params.borrowAmount
  entity.nftTokenId = event.params.nftTokenId
  entity.loanMaturityDate = event.params.loanMaturityDate
  entity.loanLiquidationDate = event.params.loanLiquidationDate
  entity.nftAsset = event.params.nftAsset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanRepaid(event: LoanRepaidEvent): void {
  let entity = new LoanRepaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.borrowAmount = event.params.borrowAmount
  entity.nftTokenId = event.params.nftTokenId
  entity.repayAmount = event.params.repayAmount
  entity.adminFee = event.params.adminFee
  entity.nftAsset = event.params.nftAsset
  entity.borrowAsset = event.params.borrowAsset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanStarted(event: LoanStartedEvent): void {
  let entity = new LoanStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.nonce = event.params.nonce
  entity.loanDetail_borrowAmount = event.params.loanDetail.borrowAmount
  entity.loanDetail_repayAmount = event.params.loanDetail.repayAmount
  entity.loanDetail_nftTokenId = event.params.loanDetail.nftTokenId
  entity.loanDetail_borrowAsset = event.params.loanDetail.borrowAsset
  entity.loanDetail_loanDuration = event.params.loanDetail.loanDuration
  entity.loanDetail_adminShare = event.params.loanDetail.adminShare
  entity.loanDetail_loanStart = event.params.loanDetail.loanStart
  entity.loanDetail_nftAsset = event.params.loanDetail.nftAsset
  entity.loanDetail_borrower = event.params.loanDetail.borrower
  entity.loanDetail_isCollection = event.params.loanDetail.isCollection

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxBorrowDurationUpdated(
  event: MaxBorrowDurationUpdatedEvent
): void {
  let entity = new MaxBorrowDurationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMaxBorrowDuration = event.params.newMaxBorrowDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinBorrowDurationUpdated(
  event: MinBorrowDurationUpdatedEvent
): void {
  let entity = new MinBorrowDurationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMinBorrowDuration = event.params.newMinBorrowDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNonceCancelled(event: NonceCancelledEvent): void {
  let entity = new NonceCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lender = event.params.lender
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTimeStampCancelled(event: TimeStampCancelledEvent): void {
  let entity = new TimeStampCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lender = event.params.lender
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateStatus(event: UpdateStatusEvent): void {
  let entity = new UpdateStatus(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.xy3NftId = event.params.xy3NftId
  entity.newStatus = event.params.newStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
