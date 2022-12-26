import { LoanStarted as LoanStartedEvent } from "../generated/XY3/XY3";
import { LoanStarted, NFT } from "../generated/schema";

// export function handleLoanStarted(event: LoanStartedEvent): void {
//   let entity = new LoanStarted(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   );
//   entity.loanId = event.params.loanId;
//   entity.borrower = event.params.borrower;
//   entity.lender = event.params.lender;
//   entity.nonce = event.params.nonce;
//   entity.loanDetail_borrowAmount = event.params.loanDetail.borrowAmount;
//   entity.loanDetail_repayAmount = event.params.loanDetail.repayAmount;
//   entity.loanDetail_nftTokenId = event.params.loanDetail.nftTokenId;
//   entity.loanDetail_borrowAsset = event.params.loanDetail.borrowAsset;
//   entity.loanDetail_loanDuration = event.params.loanDetail.loanDuration;
//   entity.loanDetail_adminShare = event.params.loanDetail.adminShare;
//   entity.loanDetail_loanStart = event.params.loanDetail.loanStart;
//   entity.loanDetail_nftAsset = event.params.loanDetail.nftAsset;
//   entity.loanDetail_borrower = event.params.loanDetail.borrower;
//   entity.loanDetail_isCollection = event.params.loanDetail.isCollection;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

export function handleLoanStarted(event: LoanStartedEvent): void {
  let entity = new LoanStarted(event.transaction.hash.toHexString());
  let nft = NFT.load(event.params.loanDetail.nftAsset.toHexString());
  if (!nft) {
    nft = new NFT(event.params.loanDetail.nftAsset.toHexString());
    nft.address = event.params.loanDetail.nftAsset;
  }
  entity.loanId = event.params.loanId;
  entity.nft = nft.id;
  entity.collateralId = event.params.loanDetail.nftTokenId;
  entity.token = event.params.loanDetail.borrowAsset;
  entity.lender = event.params.lender;
  entity.borrower = event.params.borrower;
  entity.borrowAmount = event.params.loanDetail.borrowAmount;
  entity.repayAmount = event.params.loanDetail.repayAmount;
  entity.loanDuration = event.params.loanDetail.loanDuration;
  entity.adminShare = event.params.loanDetail.adminShare;
  entity.loanStart = event.params.loanDetail.loanStart;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.txHash = event.block.hash;

  nft.save();
  entity.save();
}