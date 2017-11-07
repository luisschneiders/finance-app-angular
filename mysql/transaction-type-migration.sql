INSERT INTO `finance-angular`.`transaction-type`(
  `id`,
  `transactionTypeDescription`,
  `transactionTypeAction`,
  `transactionTypeInsertedBy`,
  `created_at`) 
SELECT
  `transactiontype_id`,
  `transactiontype_name`,
  `transactiontype_action`,
  `transactiontype_insertedby`,
  `transactiontype_dateinserted`
FROM `financephonegap`.`transactiontype`