INSERT INTO `finance-angular`.`transactions`(
  `id`,
  `transactionLink`,
  `transactionDate`,
  `transactionFromBank`,
  `transactionToBank`,
  `transactionType`,
  `transactionAction`,
  `transactionLabel`,
  `transactionAmount`,
  `transactionComments`,
  `transactionInsertedBy`,
  `transactionFlag`,
  `created_at`) 
SELECT
  `transactions_id`,
  `transactions_link`,
  `transactions_date`, 
  `transactions_frombank`,
  `transactions_tobank`,
  `transactions_type`,
  `transactions_action`,
  `transactions_label`,
  `transactions_amount`,
  `transactions_comments`,
  `transactions_insertedby`,
  `transactions_flag`,
  `transactions_dateinserted`
FROM `financephonegap`.`transactions`
