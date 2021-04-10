<h1 align="center">Readme</h1>
<p align="center">
</p>

<a href="https://hack36.com"> <img src="http://bit.ly/BuiltAtHack36" height=20px> </a>

## Sage-chain

## Introduction:
  Sage-chain : During lockdown phase, governments and health insurance providers would certainly welcome any new technology that could help them save money while also ensuring better patient care.

  Sage-chain uses blockchain technology to create vastly more secure systems that will improve electronic medical records.
  
## Table of Contents:
    1) About the D-App
    2) Features
    3) System Architecture
    4) Setup/Installation

  ## About the D-App
      A decentralized web application using ReactJS, Flask, Solidity, IPFS and the Ethereum Blockchain to store and view all medical documents securely.

  ## Features
      The app has 2 main users:
          1. Patient
          2. Doctor

      Patients can:

          1. Upload a document to the blockchain. The document is added as a node in IPFS which returns a hash. The hash is then stored on the blockchain
          2. View the uploaded documents.
          3. Analyse the uploaded documents. The text from the document is extracted and NER(Named Entity Recognition) is performed on the text using BNER(Biomedical Named Entity recognition and multi-type Normalization.)
          4. Analyse their reports to find keywords related to Drugs or Diseases.
          5. Add a trusted doctor to view their medical documents.

      Doctors can:

          1. Upload a medical document about a certain patient to the blockchain.
          2. View a certain patient's uploaded document.

  ## System Architecture
  <a href="https://ibb.co/yWfcVZK"><img src="https://i.ibb.co/r47Rvzq/Sherwyn.png" alt="System Architecture" border="0"></a><br />

  ## Setup/Installation
    For running node files:
    1)node install #hj

## Technology Stack:
  1) React.js
  2) Web3.js
  3) Ganache-cli
  4) Truffle
  5) Solidity
  6) Metamask
  7) Flask
  8) Ipfs
  9) Pytesseract
  

## Contributors:

Team Name: sallufam

* [Pranay Verma(Admin)](https://github.com/Pranay9628)
* [Shivam Rai](https://github.com/shivamrai45)
* [Siddhant Tripathi](https://github.com/tsiddhant)
* [Vedant Gupta](https://github.com/iamvedant)


### Made at:
<a href="https://hack36.com"> <img src="http://bit.ly/BuiltAtHack36" height=20px> </a>
