export const AdminOrderDetail_Query = `query AdminOrderDetail($id: Int!) {
  order_by_pk(id: $id) {
    budget
    client_id
    created_at
    dispute_status
    doc_description
    doc_format
    due_time
    id
    nature
    pages
    payment_status
    price
    progress_status
    revision_status
    spacing
    subject
    topic
    acceptance_status
    admin_files
    admin_file_name
    filesByOrderId(order_by: {id: asc}) {
      file
      fileName
      sender
    }
    revision_description
  }
}`;

export const AllOrders_Query = `query AllOrders {
    order(order_by: {created_at: desc}) {
      id
      subject
      pages
      budget
      due_time
      price
      topic
      created_at
      acceptance_status
      client {
        full_name
      }
    }
  }`;

export const ClientOrderDetail_Query = `query ClientOrderDetail($id: Int!) {
    order_by_pk(id: $id) {
      budget
      client_id
      created_at
      dispute_status
      doc_description
      doc_format
      due_time
      id
      nature
      pages
      payment_status
      price
      progress_status
      revision_status
      spacing
      subject
      topic
      acceptance_status
      admin_files
      admin_file_name
      filesByOrderId(order_by: {id: asc}) {
        file
        fileName
        sender
      }
    }
  }`;

export const dispute_query = `mutation updateDispute($orderId:Int!,$disputeValue:Int!) {
    update_order_by_pk(pk_columns: {id: $orderId}, _set: {dispute_status: $disputeValue}) {
      dispute_status
    }
  }`;

export const revision_query = `mutation updateDispute($orderId: Int!, $revisionValue: Int!,$revisionDescription: String) {
  update_order_by_pk(pk_columns: {id: $orderId}, _set: {revision_status: $revisionValue, revision_description: $revisionDescription}) {
    revision_status
  }
}`;

export const NewOrderForm_query = `mutation addOrder($client_id: Int!,$budgetRangeString: String, $price: Int!, $paperFormat: String, $nature: String, $pages: String, $deadline: String, $spacing: String, $subject: String, $topic: String, $description: String, $files: String, $fileName: String) {
    insert_order_one(object: {budget: $budgetRangeString, doc_description: $description, doc_format: $paperFormat, due_time: $deadline, nature: $nature, pages: $pages, price: $price, spacing: $spacing, subject: $subject, topic: $topic, filesByOrderId: {data: {file: $files, fileName: $fileName}}, client_id: $client_id}) {
      id
    }
  }`;

export const UserSpecific_query = `
  query UserSpecificOrders($id: Int!) {
    order(order_by: {created_at: desc}, where: {client_id: {_eq: $id}}) {
      id
      subject
      pages
      budget
      due_time
      price
      topic
      created_at
      acceptance_status
    }
  }
`;

export const ClientAllSubmissions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const AdminAllNewOrders_query = `query AllNewOrders {
  order(order_by: {created_at: desc, client: {full_name: asc}}, where: {progress_status: {_eq: 0}}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const AddUser_query = `mutation AddUser ($email: String, $pass: String,$full_name: String){
  insert_client_one(object: {email: $email, full_name: $full_name, pass: $pass}) {
      email
      full_name
      pass
  }
}`;

export const AdminStatusChange_query = `mutation upDateAcceptanceStatus($orderId: Int!,$status: Int!) {
  update_order_by_pk(pk_columns: {id: $orderId}, _set: {acceptance_status: $status}) {
    acceptance_status
  }
}`;

export const CompleteOrders_query = `query InCompleteOrders {
  order(order_by: {created_at: desc}, where: {progress_status: {_eq: 404}, acceptance_status: {_eq: 303}}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const IncompleteOrders_query = `query InCompleteOrders {
  order(order_by: {created_at: desc}, where: {progress_status: {_eq: 0}, acceptance_status: {_eq: 303}}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const CompleteOrderButton_query = `mutation CompleteOrder($orderId: Int!,$status: Int!) {
  update_order_by_pk(pk_columns: {id: $orderId}, _set: {progress_status: $status}) {
    progress_status
    client_id
    id
  }
}`;

export const ClientCompleteSubmissions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, progress_status: {_eq: 404}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const ClientInProgressSubmissions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, progress_status: {_eq: 0}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const ClientIncompleteSubmissions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, progress_status: {_neq: 404}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const ClientCompleteTransactions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, payment_status: {_eq: 404}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const ClientPaidSubmissions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, payment_status: {_eq: 404}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const ClientPendingTransactions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, payment_status: {_neq: 404}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const AdminOrdersInRevision_query = `query OrdersInRevision {
  order(order_by: {created_at: desc}, where: {revision_status: {_eq: 1}}) {
      id
      subject
      pages
      budget
      due_time
      price
      topic
      created_at
      acceptance_status
      client {
        full_name
      }
    }
}`;

export const AdminPaidOrders_query = `query PaidOrders {
  order(order_by: {created_at: desc}, where: {payment_status: {_eq: 404}}) {
      id
      subject
      pages
      budget
      due_time
      price
      topic
      created_at
      acceptance_status
      client {
        full_name
      }
    }
}`;

export const SignInFindUser_query = `query findUserQuery($email: String,$pass: String) {
  client(where: {email: {_regex: $email}, pass: {_regex: $pass}}) {
    id
    email
    full_name
    isAdmin
  }
}`;

export const AdminAllUsers_query = `query AllClients {
  client(order_by: {created_at: asc}) {
      email
      full_name
      id
      created_at
    }
}`;

export const ClientRevisionSubmissions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, revision_status: {_eq: 1}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const ClientRejectedSubmissions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, acceptance_status: {_eq: 101}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const ClientDisputedSubmissions_query = `query MyOrders($id: Int!) {
  order(where: {client_id: {_eq: $id}, dispute_status: {_eq: 1}}, order_by: {created_at: desc}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const SaveTransaction_query = `mutation InsertTransaction($userId: Int!, $orderId: Int!, $clientId: Int!, $transaction_status: String, $amount: String, $currency_code: String, $email_address: String, $merchant_id: String, $description: String, $created_at: String) {
  insert_transaction(objects: {amount: $amount, client_id: $clientId, created_at: $created_at, currency_code: $currency_code, description: $description, email_address: $email_address, order_id: $orderId, receipt: $merchant_id, status: $transaction_status, user_id: $userId}) {
    affected_rows
  }
  update_order_by_pk(pk_columns: {id: $orderId}, _set: {payment_status: 404}) {
    payment_status
  }
}`;
export const SavePurchase_query = `mutation InsertTransaction($userId: Int!, $orderId: Int!, $clientId: Int!, $transaction_status: String, $amount: String, $currency_code: String, $email_address: String, $merchant_id: String, $description: String, $created_at: String) {
  insert_transaction(objects: {amount: $amount, client_id: $clientId, created_at: $created_at, currency_code: $currency_code, description: $description, email_address: $email_address, order_id: $orderId, receipt: $merchant_id, status: $transaction_status, user_id: $userId}) {
    affected_rows
  }
}`;

export const MarkOrderAsPaid_query = `mutation MarkOrderAsPaid($orderId: Int!) {
  update_order_by_pk(pk_columns: {id: $orderId}, _set: {payment_status: 404}) {
    payment_status
  }
}`;

export const AcceptedOrders_query = `query AcceptedOrders {
  order(order_by: {created_at: desc}, where: {acceptance_status: {_eq: 303}}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const RejectedOrders_query = `query RejectedOrders {
  order(order_by: {created_at: desc}, where: {acceptance_status: {_eq: 101}}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const UnconfirmedOrders_query = `query UnconfirmedOrders {
  order(order_by: {created_at: desc}, where: {_not: {acceptance_status: {_eq: 303}}, _or: {_not: {acceptance_status: {_eq: 101}}}}) {
    id
    subject
    pages
    budget
    due_time
    price
    topic
    created_at
    acceptance_status
    client {
      full_name
id      
    }
  }
}`;

export const GetTotalBalance_query = `query TotalBalance {
  transaction(order_by: {created_at: asc}) {
    amount
  }
}`;

export const AllTransactions_query = `query MyQuery {
  transaction(order_by: {created_at: asc}) {
    amount
    client_id
    created_at
    currency_code
    description
    email_address
    order_id
    id
    receipt
    status
    user_id
  }
}`;

export const NewProduct_query = `mutation NewProduct ($description: String, $fileName: String, $files: String, $nature: String, $pages: String, $paperFormat: String, $price: Int!, $spacing: String, $subject: String, $title: String) {
  insert_product(objects: { description: $description, fileName: $fileName, files: $files, nature: $nature, pages: $pages, paperFormat: $paperFormat, price: $price, spacing: $spacing, subject: $subject, title: $title}) {
    affected_rows
  }
}`;

export const AllProducts_query = `query AllProducts {
  product(order_by: {id: desc}) {
    id
    price
    title
    description
  }
}`;

export const getPurchase_query = `query getProduct ($id:Int!){
  product_by_pk(id: $id) {
    fileName
    files
  }
}`;

export const UserDetails_query = `query UserDetails_Query($id: Int!) {
  client(where: {id: {_eq: $id}}) {
    full_name
    email
    orders(order_by: {id: asc}) {
      price
      progress_status
      doc_description
      topic
      id
    }
  }
}`;

export const EditOrderForm_query = `mutation EditOrderForm_query($orderId: Int!, $clientId: Int!, $price: Int!, $paperFormat: String, $nature: String, $pages: String, $deadline: String, $spacing: String, $subject: String, $topic: String, $description: String) {
  update_order(where: {id: {_eq: $orderId}}, _set: {client_id: $clientId, price: $price, topic: $topic, doc_format: $paperFormat, nature: $nature, pages: $pages, due_time: $deadline, spacing: $spacing, subject: $subject, doc_description: $description}) {
    returning {
      id
    }
  }
}`;
