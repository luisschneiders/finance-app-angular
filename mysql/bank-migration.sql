INSERT INTO `finance-angular`.`banks`(
  `bankDescription`,
  `bankAccount`,
  `bankInitialBalance`,
  `bankCurrentBalance`,
  `bankInsertedBy`,
  `created_at`)
SELECT
  `bank_description`,
  `bank_account`,
  `bank_initbalance`,
  `bank_actubalance`,
  `bank_insertedby`,
  `bank_dateinserted`
FROM `financephonegap`.`bank`
