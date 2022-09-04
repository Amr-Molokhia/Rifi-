import { api } from '../api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type AccClass = {
  __typename?: 'AccClass';
  cashRecs?: Maybe<Array<Maybe<CashRec>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  receipts?: Maybe<Array<Maybe<Receipt>>>;
  type?: Maybe<Scalars['String']>;
};

export type AccClassCollectionSegment = {
  __typename?: 'AccClassCollectionSegment';
  items?: Maybe<Array<Maybe<AccClass>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type AccClassFilterInput = {
  and?: Maybe<Array<AccClassFilterInput>>;
  cashRecs?: Maybe<ListFilterInputTypeOfCashRecFilterInput>;
  description?: Maybe<StringOperationFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<AccClassFilterInput>>;
  receipts?: Maybe<ListFilterInputTypeOfReceiptFilterInput>;
  type?: Maybe<StringOperationFilterInput>;
};

export type AccClassInput = {
  cashRecs?: Maybe<Array<Maybe<CashRecInput>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  receipts?: Maybe<Array<Maybe<ReceiptInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type AccClassSortInput = {
  description?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  type?: Maybe<SortEnumType>;
};

export type Attendance = {
  __typename?: 'Attendance';
  date?: Maybe<Scalars['DateTime']>;
  dcheck?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['Long']>;
  employeeNavigation?: Maybe<Employee>;
  id: Scalars['Long'];
};

export type AttendanceCollectionSegment = {
  __typename?: 'AttendanceCollectionSegment';
  items?: Maybe<Array<Maybe<Attendance>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type AttendanceFilterInput = {
  and?: Maybe<Array<AttendanceFilterInput>>;
  date?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  dcheck?: Maybe<StringOperationFilterInput>;
  employee?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  employeeNavigation?: Maybe<EmployeeFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<AttendanceFilterInput>>;
};

export type AttendanceInput = {
  date?: Maybe<Scalars['DateTime']>;
  dcheck?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['Long']>;
  employeeNavigation?: Maybe<EmployeeInput>;
  id: Scalars['Long'];
};

export type AttendanceSortInput = {
  date?: Maybe<SortEnumType>;
  dcheck?: Maybe<SortEnumType>;
  employee?: Maybe<SortEnumType>;
  employeeNavigation?: Maybe<EmployeeSortInput>;
  id?: Maybe<SortEnumType>;
};

export type Bank = {
  __typename?: 'Bank';
  account?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type BankCollectionSegment = {
  __typename?: 'BankCollectionSegment';
  items?: Maybe<Array<Maybe<Bank>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type BankFilterInput = {
  account?: Maybe<StringOperationFilterInput>;
  and?: Maybe<Array<BankFilterInput>>;
  id?: Maybe<ComparableInt32OperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  or?: Maybe<Array<BankFilterInput>>;
};

export type BankInput = {
  account?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type BankSortInput = {
  account?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
};

export type CashRec = {
  __typename?: 'CashRec';
  amount?: Maybe<Scalars['Decimal']>;
  bankAccount?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  checkDate?: Maybe<Scalars['DateTime']>;
  checkno?: Maybe<Scalars['String']>;
  docClass?: Maybe<Scalars['Long']>;
  docClassNavigation?: Maybe<AccClass>;
  docDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Long'];
  payType?: Maybe<Scalars['String']>;
  reciveNo?: Maybe<Scalars['Long']>;
  supplierName?: Maybe<Scalars['String']>;
};

export type CashRecCollectionSegment = {
  __typename?: 'CashRecCollectionSegment';
  items?: Maybe<Array<Maybe<CashRec>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type CashRecFilterInput = {
  amount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  and?: Maybe<Array<CashRecFilterInput>>;
  bankAccount?: Maybe<StringOperationFilterInput>;
  bankName?: Maybe<StringOperationFilterInput>;
  checkDate?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  checkno?: Maybe<StringOperationFilterInput>;
  docClass?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  docClassNavigation?: Maybe<AccClassFilterInput>;
  docDate?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<CashRecFilterInput>>;
  payType?: Maybe<StringOperationFilterInput>;
  reciveNo?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  supplierName?: Maybe<StringOperationFilterInput>;
};

export type CashRecInput = {
  amount?: Maybe<Scalars['Decimal']>;
  bankAccount?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  checkDate?: Maybe<Scalars['DateTime']>;
  checkno?: Maybe<Scalars['String']>;
  docClass?: Maybe<Scalars['Long']>;
  docClassNavigation?: Maybe<AccClassInput>;
  docDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Long'];
  payType?: Maybe<Scalars['String']>;
  reciveNo?: Maybe<Scalars['Long']>;
  supplierName?: Maybe<Scalars['String']>;
};

export type CashRecSortInput = {
  amount?: Maybe<SortEnumType>;
  bankAccount?: Maybe<SortEnumType>;
  bankName?: Maybe<SortEnumType>;
  checkDate?: Maybe<SortEnumType>;
  checkno?: Maybe<SortEnumType>;
  docClass?: Maybe<SortEnumType>;
  docClassNavigation?: Maybe<AccClassSortInput>;
  docDate?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  payType?: Maybe<SortEnumType>;
  reciveNo?: Maybe<SortEnumType>;
  supplierName?: Maybe<SortEnumType>;
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
};

export type ComparableByteOperationFilterInput = {
  eq?: Maybe<Scalars['Byte']>;
  gt?: Maybe<Scalars['Byte']>;
  gte?: Maybe<Scalars['Byte']>;
  in?: Maybe<Array<Scalars['Byte']>>;
  lt?: Maybe<Scalars['Byte']>;
  lte?: Maybe<Scalars['Byte']>;
  neq?: Maybe<Scalars['Byte']>;
  ngt?: Maybe<Scalars['Byte']>;
  ngte?: Maybe<Scalars['Byte']>;
  nin?: Maybe<Array<Scalars['Byte']>>;
  nlt?: Maybe<Scalars['Byte']>;
  nlte?: Maybe<Scalars['Byte']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  neq?: Maybe<Scalars['Int']>;
  ngt?: Maybe<Scalars['Int']>;
  ngte?: Maybe<Scalars['Int']>;
  nin?: Maybe<Array<Scalars['Int']>>;
  nlt?: Maybe<Scalars['Int']>;
  nlte?: Maybe<Scalars['Int']>;
};

export type ComparableInt64OperationFilterInput = {
  eq?: Maybe<Scalars['Long']>;
  gt?: Maybe<Scalars['Long']>;
  gte?: Maybe<Scalars['Long']>;
  in?: Maybe<Array<Scalars['Long']>>;
  lt?: Maybe<Scalars['Long']>;
  lte?: Maybe<Scalars['Long']>;
  neq?: Maybe<Scalars['Long']>;
  ngt?: Maybe<Scalars['Long']>;
  ngte?: Maybe<Scalars['Long']>;
  nin?: Maybe<Array<Scalars['Long']>>;
  nlt?: Maybe<Scalars['Long']>;
  nlte?: Maybe<Scalars['Long']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  ngt?: Maybe<Scalars['DateTime']>;
  ngte?: Maybe<Scalars['DateTime']>;
  nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  nlt?: Maybe<Scalars['DateTime']>;
  nlte?: Maybe<Scalars['DateTime']>;
};

export type ComparableNullableOfDecimalOperationFilterInput = {
  eq?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  neq?: Maybe<Scalars['Decimal']>;
  ngt?: Maybe<Scalars['Decimal']>;
  ngte?: Maybe<Scalars['Decimal']>;
  nin?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  nlt?: Maybe<Scalars['Decimal']>;
  nlte?: Maybe<Scalars['Decimal']>;
};

export type ComparableNullableOfInt32OperationFilterInput = {
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  neq?: Maybe<Scalars['Int']>;
  ngt?: Maybe<Scalars['Int']>;
  ngte?: Maybe<Scalars['Int']>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nlt?: Maybe<Scalars['Int']>;
  nlte?: Maybe<Scalars['Int']>;
};

export type ComparableNullableOfInt64OperationFilterInput = {
  eq?: Maybe<Scalars['Long']>;
  gt?: Maybe<Scalars['Long']>;
  gte?: Maybe<Scalars['Long']>;
  in?: Maybe<Array<Maybe<Scalars['Long']>>>;
  lt?: Maybe<Scalars['Long']>;
  lte?: Maybe<Scalars['Long']>;
  neq?: Maybe<Scalars['Long']>;
  ngt?: Maybe<Scalars['Long']>;
  ngte?: Maybe<Scalars['Long']>;
  nin?: Maybe<Array<Maybe<Scalars['Long']>>>;
  nlt?: Maybe<Scalars['Long']>;
  nlte?: Maybe<Scalars['Long']>;
};

export type Contact = {
  __typename?: 'Contact';
  cuslnk?: Maybe<Scalars['Long']>;
  cuslnkNavigation?: Maybe<Customer>;
  id: Scalars['Int'];
  mobile?: Maybe<Scalars['String']>;
  mobile2?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplnk?: Maybe<Scalars['Long']>;
  supplnkNavigation?: Maybe<Supplier>;
};

export type ContactCollectionSegment = {
  __typename?: 'ContactCollectionSegment';
  items?: Maybe<Array<Maybe<Contact>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type ContactFilterInput = {
  and?: Maybe<Array<ContactFilterInput>>;
  cuslnk?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  cuslnkNavigation?: Maybe<CustomerFilterInput>;
  id?: Maybe<ComparableInt32OperationFilterInput>;
  mobile?: Maybe<StringOperationFilterInput>;
  mobile2?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  or?: Maybe<Array<ContactFilterInput>>;
  supplnk?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  supplnkNavigation?: Maybe<SupplierFilterInput>;
};

export type ContactInput = {
  cuslnk?: Maybe<Scalars['Long']>;
  cuslnkNavigation?: Maybe<CustomerInput>;
  id: Scalars['Int'];
  mobile?: Maybe<Scalars['String']>;
  mobile2?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplnk?: Maybe<Scalars['Long']>;
  supplnkNavigation?: Maybe<SupplierInput>;
};

export type ContactSortInput = {
  cuslnk?: Maybe<SortEnumType>;
  cuslnkNavigation?: Maybe<CustomerSortInput>;
  id?: Maybe<SortEnumType>;
  mobile?: Maybe<SortEnumType>;
  mobile2?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  supplnk?: Maybe<SortEnumType>;
  supplnkNavigation?: Maybe<SupplierSortInput>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  id: Scalars['Long'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Array<Scalars['Byte']>>;
  phone?: Maybe<Scalars['String']>;
};

export type CustomerCollectionSegment = {
  __typename?: 'CustomerCollectionSegment';
  items?: Maybe<Array<Maybe<Customer>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type CustomerFilterInput = {
  address?: Maybe<StringOperationFilterInput>;
  and?: Maybe<Array<CustomerFilterInput>>;
  contacts?: Maybe<ListFilterInputTypeOfContactFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  mobile?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  note?: Maybe<ListComparableByteOperationFilterInput>;
  or?: Maybe<Array<CustomerFilterInput>>;
  phone?: Maybe<StringOperationFilterInput>;
};

export type CustomerInput = {
  address?: Maybe<Scalars['String']>;
  contacts?: Maybe<Array<Maybe<ContactInput>>>;
  id: Scalars['Long'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Array<Scalars['Byte']>>;
  phone?: Maybe<Scalars['String']>;
};

export type CustomerSortInput = {
  address?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  mobile?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  phone?: Maybe<SortEnumType>;
};

export type Employee = {
  __typename?: 'Employee';
  address?: Maybe<Scalars['String']>;
  attendances?: Maybe<Array<Maybe<Attendance>>>;
  id: Scalars['Long'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  salarySystem?: Maybe<Scalars['String']>;
  salaryValue?: Maybe<Scalars['Decimal']>;
  weeklyRepates?: Maybe<Array<Maybe<WeeklyRepate>>>;
};

export type EmployeeCollectionSegment = {
  __typename?: 'EmployeeCollectionSegment';
  items?: Maybe<Array<Maybe<Employee>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type EmployeeFilterInput = {
  address?: Maybe<StringOperationFilterInput>;
  and?: Maybe<Array<EmployeeFilterInput>>;
  attendances?: Maybe<ListFilterInputTypeOfAttendanceFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  mobile?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  or?: Maybe<Array<EmployeeFilterInput>>;
  phone?: Maybe<StringOperationFilterInput>;
  salarySystem?: Maybe<StringOperationFilterInput>;
  salaryValue?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  weeklyRepates?: Maybe<ListFilterInputTypeOfWeeklyRepateFilterInput>;
};

export type EmployeeInput = {
  address?: Maybe<Scalars['String']>;
  attendances?: Maybe<Array<Maybe<AttendanceInput>>>;
  id: Scalars['Long'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  salarySystem?: Maybe<Scalars['String']>;
  salaryValue?: Maybe<Scalars['Decimal']>;
  weeklyRepates?: Maybe<Array<Maybe<WeeklyRepateInput>>>;
};

export type EmployeeSortInput = {
  address?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  mobile?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  phone?: Maybe<SortEnumType>;
  salarySystem?: Maybe<SortEnumType>;
  salaryValue?: Maybe<SortEnumType>;
};

export type ListComparableByteOperationFilterInput = {
  all?: Maybe<ComparableByteOperationFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<ComparableByteOperationFilterInput>;
  some?: Maybe<ComparableByteOperationFilterInput>;
};

export type ListFilterInputTypeOfAttendanceFilterInput = {
  all?: Maybe<AttendanceFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<AttendanceFilterInput>;
  some?: Maybe<AttendanceFilterInput>;
};

export type ListFilterInputTypeOfCashRecFilterInput = {
  all?: Maybe<CashRecFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<CashRecFilterInput>;
  some?: Maybe<CashRecFilterInput>;
};

export type ListFilterInputTypeOfContactFilterInput = {
  all?: Maybe<ContactFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<ContactFilterInput>;
  some?: Maybe<ContactFilterInput>;
};

export type ListFilterInputTypeOfProductFilterInput = {
  all?: Maybe<ProductFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<ProductFilterInput>;
  some?: Maybe<ProductFilterInput>;
};

export type ListFilterInputTypeOfRecGsubFilterInput = {
  all?: Maybe<RecGsubFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<RecGsubFilterInput>;
  some?: Maybe<RecGsubFilterInput>;
};

export type ListFilterInputTypeOfReceiptFilterInput = {
  all?: Maybe<ReceiptFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<ReceiptFilterInput>;
  some?: Maybe<ReceiptFilterInput>;
};

export type ListFilterInputTypeOfRetCsubFilterInput = {
  all?: Maybe<RetCsubFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<RetCsubFilterInput>;
  some?: Maybe<RetCsubFilterInput>;
};

export type ListFilterInputTypeOfRetSsubFilterInput = {
  all?: Maybe<RetSsubFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<RetSsubFilterInput>;
  some?: Maybe<RetSsubFilterInput>;
};

export type ListFilterInputTypeOfSalGsubFilterInput = {
  all?: Maybe<SalGsubFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<SalGsubFilterInput>;
  some?: Maybe<SalGsubFilterInput>;
};

export type ListFilterInputTypeOfWeeklyRepateFilterInput = {
  all?: Maybe<WeeklyRepateFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
  none?: Maybe<WeeklyRepateFilterInput>;
  some?: Maybe<WeeklyRepateFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAccClass?: Maybe<AccClass>;
  addAttendance?: Maybe<Attendance>;
  addBank?: Maybe<Bank>;
  addCashRec?: Maybe<CashRec>;
  addCustomer?: Maybe<Customer>;
  addDelivery?: Maybe<SalesGood>;
  addEmployee?: Maybe<Employee>;
  addProdClass?: Maybe<ProdClass>;
  addProduct?: Maybe<Product>;
  addRecGood?: Maybe<RecGood>;
  addReceipt?: Maybe<Receipt>;
  addReturnCust?: Maybe<ReturnCust>;
  addReturnSupp?: Maybe<ReturnSupp>;
  addStore?: Maybe<Store>;
  addSupplier?: Maybe<Supplier>;
  addUright?: Maybe<Uright>;
  addWeeklyRepate?: Maybe<WeeklyRepate>;
  deleteAccClass?: Maybe<AccClass>;
  deleteAttendance?: Maybe<Attendance>;
  deleteBank?: Maybe<Bank>;
  deleteCashRec?: Maybe<CashRec>;
  deleteCustomer?: Maybe<Customer>;
  deleteDelivery?: Maybe<SalesGood>;
  deleteEmployee?: Maybe<Employee>;
  deleteProdClass?: Maybe<ProdClass>;
  deleteProduct?: Maybe<Product>;
  deleteRecGood?: Maybe<RecGood>;
  deleteReceipt?: Maybe<Receipt>;
  deleteReturnCust?: Maybe<ReturnCust>;
  deleteReturnSupp?: Maybe<ReturnSupp>;
  deleteStore?: Maybe<Store>;
  deleteSupplier?: Maybe<Supplier>;
  deleteUright?: Maybe<Uright>;
  deleteWeeklyRepate?: Maybe<WeeklyRepate>;
  updateAccClass?: Maybe<AccClass>;
  updateAttendance?: Maybe<Attendance>;
  updateBank?: Maybe<Bank>;
  updateCashRec?: Maybe<CashRec>;
  updateCustomer?: Maybe<Customer>;
  updateDelivery?: Maybe<SalesGood>;
  updateEmployee?: Maybe<Employee>;
  updateProdClass?: Maybe<ProdClass>;
  updateProduct?: Maybe<Product>;
  updateRecGood?: Maybe<RecGood>;
  updateReceipt?: Maybe<Receipt>;
  updateReturnCust?: Maybe<ReturnCust>;
  updateReturnSupp?: Maybe<ReturnSupp>;
  updateStore?: Maybe<Store>;
  updateSupplier?: Maybe<Supplier>;
  updateUright?: Maybe<Uright>;
  updateWeeklyRepate?: Maybe<WeeklyRepate>;
};


export type MutationAddAccClassArgs = {
  accClass?: Maybe<AccClassInput>;
};


export type MutationAddAttendanceArgs = {
  attendance?: Maybe<AttendanceInput>;
};


export type MutationAddBankArgs = {
  bank?: Maybe<BankInput>;
};


export type MutationAddCashRecArgs = {
  cashRec?: Maybe<CashRecInput>;
};


export type MutationAddCustomerArgs = {
  customer?: Maybe<CustomerInput>;
};


export type MutationAddDeliveryArgs = {
  salesGood?: Maybe<SalesGoodInput>;
};


export type MutationAddEmployeeArgs = {
  employee?: Maybe<EmployeeInput>;
};


export type MutationAddProdClassArgs = {
  prodClass?: Maybe<ProdClassInput>;
};


export type MutationAddProductArgs = {
  product?: Maybe<ProductInput>;
};


export type MutationAddRecGoodArgs = {
  recGood?: Maybe<RecGoodInput>;
};


export type MutationAddReceiptArgs = {
  receipt?: Maybe<ReceiptInput>;
};


export type MutationAddReturnCustArgs = {
  returnCust?: Maybe<ReturnCustInput>;
};


export type MutationAddReturnSuppArgs = {
  returnSupp?: Maybe<ReturnSuppInput>;
};


export type MutationAddStoreArgs = {
  store?: Maybe<StoreInput>;
};


export type MutationAddSupplierArgs = {
  supplier?: Maybe<SupplierInput>;
};


export type MutationAddUrightArgs = {
  uright?: Maybe<UrightInput>;
};


export type MutationAddWeeklyRepateArgs = {
  weeklyRepate?: Maybe<WeeklyRepateInput>;
};


export type MutationDeleteAccClassArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteAttendanceArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteBankArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteCashRecArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteDeliveryArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteEmployeeArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteProdClassArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteRecGoodArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteReceiptArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteReturnCustArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteReturnSuppArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteUrightArgs = {
  id: Scalars['Long'];
};


export type MutationDeleteWeeklyRepateArgs = {
  id: Scalars['Long'];
};


export type MutationUpdateAccClassArgs = {
  accClass?: Maybe<AccClassInput>;
};


export type MutationUpdateAttendanceArgs = {
  attendance?: Maybe<AttendanceInput>;
};


export type MutationUpdateBankArgs = {
  bank?: Maybe<BankInput>;
};


export type MutationUpdateCashRecArgs = {
  cashRec?: Maybe<CashRecInput>;
};


export type MutationUpdateCustomerArgs = {
  customer?: Maybe<CustomerInput>;
};


export type MutationUpdateDeliveryArgs = {
  salesGood?: Maybe<SalesGoodInput>;
};


export type MutationUpdateEmployeeArgs = {
  employee?: Maybe<EmployeeInput>;
};


export type MutationUpdateProdClassArgs = {
  prodClass?: Maybe<ProdClassInput>;
};


export type MutationUpdateProductArgs = {
  product?: Maybe<ProductInput>;
};


export type MutationUpdateRecGoodArgs = {
  recGood?: Maybe<RecGoodInput>;
};


export type MutationUpdateReceiptArgs = {
  receipt?: Maybe<ReceiptInput>;
};


export type MutationUpdateReturnCustArgs = {
  returnCust?: Maybe<ReturnCustInput>;
};


export type MutationUpdateReturnSuppArgs = {
  returnSupp?: Maybe<ReturnSuppInput>;
};


export type MutationUpdateStoreArgs = {
  store?: Maybe<StoreInput>;
};


export type MutationUpdateSupplierArgs = {
  supplier?: Maybe<SupplierInput>;
};


export type MutationUpdateUrightArgs = {
  uright?: Maybe<UrightInput>;
};


export type MutationUpdateWeeklyRepateArgs = {
  weeklyRepate?: Maybe<WeeklyRepateInput>;
};

export type ProdClass = {
  __typename?: 'ProdClass';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  products?: Maybe<Array<Maybe<Product>>>;
};

export type ProdClassCollectionSegment = {
  __typename?: 'ProdClassCollectionSegment';
  items?: Maybe<Array<Maybe<ProdClass>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type ProdClassFilterInput = {
  and?: Maybe<Array<ProdClassFilterInput>>;
  description?: Maybe<StringOperationFilterInput>;
  id?: Maybe<ComparableInt32OperationFilterInput>;
  or?: Maybe<Array<ProdClassFilterInput>>;
  products?: Maybe<ListFilterInputTypeOfProductFilterInput>;
};

export type ProdClassInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  products?: Maybe<Array<Maybe<ProductInput>>>;
};

export type ProdClassSortInput = {
  description?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
};

export type Product = {
  __typename?: 'Product';
  classification?: Maybe<Scalars['Int']>;
  classificationNavigation?: Maybe<ProdClass>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  recGsubs?: Maybe<Array<Maybe<RecGsub>>>;
  retSsubs?: Maybe<Array<Maybe<RetSsub>>>;
  salGsubs?: Maybe<Array<Maybe<SalGsub>>>;
};

export type ProductCollectionSegment = {
  __typename?: 'ProductCollectionSegment';
  items?: Maybe<Array<Maybe<Product>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type ProductFilterInput = {
  and?: Maybe<Array<ProductFilterInput>>;
  classification?: Maybe<ComparableNullableOfInt32OperationFilterInput>;
  classificationNavigation?: Maybe<ProdClassFilterInput>;
  description?: Maybe<StringOperationFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<ProductFilterInput>>;
  recGsubs?: Maybe<ListFilterInputTypeOfRecGsubFilterInput>;
  retSsubs?: Maybe<ListFilterInputTypeOfRetSsubFilterInput>;
  salGsubs?: Maybe<ListFilterInputTypeOfSalGsubFilterInput>;
};

export type ProductInput = {
  classification?: Maybe<Scalars['Int']>;
  classificationNavigation?: Maybe<ProdClassInput>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  recGsubs?: Maybe<Array<Maybe<RecGsubInput>>>;
  retSsubs?: Maybe<Array<Maybe<RetSsubInput>>>;
  salGsubs?: Maybe<Array<Maybe<SalGsubInput>>>;
};

export type ProductSortInput = {
  classification?: Maybe<SortEnumType>;
  classificationNavigation?: Maybe<ProdClassSortInput>;
  description?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
};

export type Query = {
  __typename?: 'Query';
  aAttendance?: Maybe<AttendanceCollectionSegment>;
  aBank?: Maybe<BankCollectionSegment>;
  aCashRec?: Maybe<CashRecCollectionSegment>;
  aContact?: Maybe<ContactCollectionSegment>;
  aCustomer?: Maybe<CustomerCollectionSegment>;
  aEmployee?: Maybe<EmployeeCollectionSegment>;
  aProdClass?: Maybe<ProdClassCollectionSegment>;
  aProduct?: Maybe<ProductCollectionSegment>;
  aRecGood?: Maybe<RecGoodCollectionSegment>;
  aReceipt?: Maybe<ReceiptCollectionSegment>;
  aReturnCust?: Maybe<ReturnCustCollectionSegment>;
  aReturnSupp?: Maybe<ReturnSuppCollectionSegment>;
  aSalesGood?: Maybe<SalesGoodCollectionSegment>;
  aStore?: Maybe<StoreCollectionSegment>;
  aSupplier?: Maybe<SupplierCollectionSegment>;
  aWeeklyRepate?: Maybe<WeeklyRepateCollectionSegment>;
  accClass?: Maybe<AccClassCollectionSegment>;
  uright?: Maybe<UrightCollectionSegment>;
};


export type QueryAAttendanceArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<AttendanceSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AttendanceFilterInput>;
};


export type QueryABankArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<BankSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BankFilterInput>;
};


export type QueryACashRecArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<CashRecSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CashRecFilterInput>;
};


export type QueryAContactArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<ContactSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactFilterInput>;
};


export type QueryACustomerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<CustomerSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CustomerFilterInput>;
};


export type QueryAEmployeeArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<EmployeeSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EmployeeFilterInput>;
};


export type QueryAProdClassArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<ProdClassSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProdClassFilterInput>;
};


export type QueryAProductArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<ProductSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductFilterInput>;
};


export type QueryARecGoodArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<RecGoodSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RecGoodFilterInput>;
};


export type QueryAReceiptArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<ReceiptSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReceiptFilterInput>;
};


export type QueryAReturnCustArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<ReturnCustSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReturnCustFilterInput>;
};


export type QueryAReturnSuppArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<ReturnSuppSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReturnSuppFilterInput>;
};


export type QueryASalesGoodArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<SalesGoodSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SalesGoodFilterInput>;
};


export type QueryAStoreArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<StoreSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StoreFilterInput>;
};


export type QueryASupplierArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<SupplierSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SupplierFilterInput>;
};


export type QueryAWeeklyRepateArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<WeeklyRepateSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<WeeklyRepateFilterInput>;
};


export type QueryAccClassArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<AccClassSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccClassFilterInput>;
};


export type QueryUrightArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<UrightSortInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UrightFilterInput>;
};

export type RecGood = {
  __typename?: 'RecGood';
  discount?: Maybe<Scalars['Decimal']>;
  id: Scalars['Long'];
  invoiceNo?: Maybe<Scalars['Long']>;
  recGsubs?: Maybe<Array<Maybe<RecGsub>>>;
  recivingData?: Maybe<Scalars['DateTime']>;
  supplierName?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Decimal']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type RecGoodCollectionSegment = {
  __typename?: 'RecGoodCollectionSegment';
  items?: Maybe<Array<Maybe<RecGood>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type RecGoodFilterInput = {
  and?: Maybe<Array<RecGoodFilterInput>>;
  discount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  invoiceNo?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  or?: Maybe<Array<RecGoodFilterInput>>;
  recGsubs?: Maybe<ListFilterInputTypeOfRecGsubFilterInput>;
  recivingData?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  supplierName?: Maybe<StringOperationFilterInput>;
  total?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  totalAmount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type RecGoodInput = {
  discount?: Maybe<Scalars['Decimal']>;
  id: Scalars['Long'];
  invoiceNo?: Maybe<Scalars['Long']>;
  recGsubs?: Maybe<Array<Maybe<RecGsubInput>>>;
  recivingData?: Maybe<Scalars['DateTime']>;
  supplierName?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Decimal']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type RecGoodSortInput = {
  discount?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  invoiceNo?: Maybe<SortEnumType>;
  recivingData?: Maybe<SortEnumType>;
  supplierName?: Maybe<SortEnumType>;
  total?: Maybe<SortEnumType>;
  totalAmount?: Maybe<SortEnumType>;
};

export type RecGsub = {
  __typename?: 'RecGsub';
  id: Scalars['Long'];
  product?: Maybe<Scalars['Long']>;
  productNavigation?: Maybe<Product>;
  produnit?: Maybe<Scalars['String']>;
  qafterDiscount?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Decimal']>;
  recGlnk?: Maybe<Scalars['Long']>;
  recGlnkNavigation?: Maybe<RecGood>;
  store?: Maybe<Scalars['Long']>;
  storeNavigation?: Maybe<Store>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unitPrice?: Maybe<Scalars['Decimal']>;
};

export type RecGsubFilterInput = {
  and?: Maybe<Array<RecGsubFilterInput>>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<RecGsubFilterInput>>;
  product?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  productNavigation?: Maybe<ProductFilterInput>;
  produnit?: Maybe<StringOperationFilterInput>;
  qafterDiscount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  quantity?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  recGlnk?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  recGlnkNavigation?: Maybe<RecGoodFilterInput>;
  store?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  storeNavigation?: Maybe<StoreFilterInput>;
  totalPrice?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  unitPrice?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type RecGsubInput = {
  id: Scalars['Long'];
  product?: Maybe<Scalars['Long']>;
  productNavigation?: Maybe<ProductInput>;
  produnit?: Maybe<Scalars['String']>;
  qafterDiscount?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Decimal']>;
  recGlnk?: Maybe<Scalars['Long']>;
  recGlnkNavigation?: Maybe<RecGoodInput>;
  store?: Maybe<Scalars['Long']>;
  storeNavigation?: Maybe<StoreInput>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unitPrice?: Maybe<Scalars['Decimal']>;
};

export type Receipt = {
  __typename?: 'Receipt';
  amount?: Maybe<Scalars['Decimal']>;
  bankAccount?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  checkBank?: Maybe<Scalars['String']>;
  checkDate?: Maybe<Scalars['DateTime']>;
  checkno?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  docClass?: Maybe<Scalars['Long']>;
  docClassNavigation?: Maybe<AccClass>;
  docDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Long'];
  payType?: Maybe<Scalars['String']>;
  saleNo?: Maybe<Scalars['Long']>;
};

export type ReceiptCollectionSegment = {
  __typename?: 'ReceiptCollectionSegment';
  items?: Maybe<Array<Maybe<Receipt>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type ReceiptFilterInput = {
  amount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  and?: Maybe<Array<ReceiptFilterInput>>;
  bankAccount?: Maybe<StringOperationFilterInput>;
  bankName?: Maybe<StringOperationFilterInput>;
  checkBank?: Maybe<StringOperationFilterInput>;
  checkDate?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  checkno?: Maybe<StringOperationFilterInput>;
  customerName?: Maybe<StringOperationFilterInput>;
  docClass?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  docClassNavigation?: Maybe<AccClassFilterInput>;
  docDate?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<ReceiptFilterInput>>;
  payType?: Maybe<StringOperationFilterInput>;
  saleNo?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
};

export type ReceiptInput = {
  amount?: Maybe<Scalars['Decimal']>;
  bankAccount?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  checkBank?: Maybe<Scalars['String']>;
  checkDate?: Maybe<Scalars['DateTime']>;
  checkno?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  docClass?: Maybe<Scalars['Long']>;
  docClassNavigation?: Maybe<AccClassInput>;
  docDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Long'];
  payType?: Maybe<Scalars['String']>;
  saleNo?: Maybe<Scalars['Long']>;
};

export type ReceiptSortInput = {
  amount?: Maybe<SortEnumType>;
  bankAccount?: Maybe<SortEnumType>;
  bankName?: Maybe<SortEnumType>;
  checkBank?: Maybe<SortEnumType>;
  checkDate?: Maybe<SortEnumType>;
  checkno?: Maybe<SortEnumType>;
  customerName?: Maybe<SortEnumType>;
  docClass?: Maybe<SortEnumType>;
  docClassNavigation?: Maybe<AccClassSortInput>;
  docDate?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  payType?: Maybe<SortEnumType>;
  saleNo?: Maybe<SortEnumType>;
};

export type RetCsub = {
  __typename?: 'RetCsub';
  id: Scalars['Long'];
  product?: Maybe<Scalars['Long']>;
  productNavigation?: Maybe<Product>;
  produnit?: Maybe<Array<Scalars['Byte']>>;
  quntity?: Maybe<Scalars['Decimal']>;
  retAccTypr?: Maybe<Scalars['String']>;
  retClnk?: Maybe<Scalars['Long']>;
  retClnkNavigation?: Maybe<ReturnCust>;
  store?: Maybe<Scalars['Long']>;
  storeNavigation?: Maybe<Store>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unitPrice?: Maybe<Scalars['Decimal']>;
};

export type RetCsubFilterInput = {
  and?: Maybe<Array<RetCsubFilterInput>>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<RetCsubFilterInput>>;
  product?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  productNavigation?: Maybe<ProductFilterInput>;
  produnit?: Maybe<ListComparableByteOperationFilterInput>;
  quntity?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  retAccTypr?: Maybe<StringOperationFilterInput>;
  retClnk?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  retClnkNavigation?: Maybe<ReturnCustFilterInput>;
  store?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  storeNavigation?: Maybe<StoreFilterInput>;
  totalPrice?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  unitPrice?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type RetCsubInput = {
  id: Scalars['Long'];
  product?: Maybe<Scalars['Long']>;
  productNavigation?: Maybe<ProductInput>;
  produnit?: Maybe<Array<Scalars['Byte']>>;
  quntity?: Maybe<Scalars['Decimal']>;
  retAccTypr?: Maybe<Scalars['String']>;
  retClnk?: Maybe<Scalars['Long']>;
  retClnkNavigation?: Maybe<ReturnCustInput>;
  store?: Maybe<Scalars['Long']>;
  storeNavigation?: Maybe<StoreInput>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unitPrice?: Maybe<Scalars['Decimal']>;
};

export type RetSsub = {
  __typename?: 'RetSsub';
  id: Scalars['Long'];
  product?: Maybe<Scalars['Long']>;
  productNavigation?: Maybe<Product>;
  produnit?: Maybe<Scalars['String']>;
  quntity?: Maybe<Scalars['Decimal']>;
  retAccTypr?: Maybe<Scalars['String']>;
  retSlnk?: Maybe<Scalars['Long']>;
  retSlnkNavigation?: Maybe<ReturnSupp>;
  store?: Maybe<Scalars['Long']>;
  storeNavigation?: Maybe<Store>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unitPrice?: Maybe<Scalars['Decimal']>;
};

export type RetSsubFilterInput = {
  and?: Maybe<Array<RetSsubFilterInput>>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<RetSsubFilterInput>>;
  product?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  productNavigation?: Maybe<ProductFilterInput>;
  produnit?: Maybe<StringOperationFilterInput>;
  quntity?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  retAccTypr?: Maybe<StringOperationFilterInput>;
  retSlnk?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  retSlnkNavigation?: Maybe<ReturnSuppFilterInput>;
  store?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  storeNavigation?: Maybe<StoreFilterInput>;
  totalPrice?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  unitPrice?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type RetSsubInput = {
  id: Scalars['Long'];
  product?: Maybe<Scalars['Long']>;
  productNavigation?: Maybe<ProductInput>;
  produnit?: Maybe<Scalars['String']>;
  quntity?: Maybe<Scalars['Decimal']>;
  retAccTypr?: Maybe<Scalars['String']>;
  retSlnk?: Maybe<Scalars['Long']>;
  retSlnkNavigation?: Maybe<ReturnSuppInput>;
  store?: Maybe<Scalars['Long']>;
  storeNavigation?: Maybe<StoreInput>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unitPrice?: Maybe<Scalars['Decimal']>;
};

export type ReturnCust = {
  __typename?: 'ReturnCust';
  customerName?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  retCsubs?: Maybe<Array<Maybe<RetCsub>>>;
  retDate?: Maybe<Scalars['DateTime']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type ReturnCustCollectionSegment = {
  __typename?: 'ReturnCustCollectionSegment';
  items?: Maybe<Array<Maybe<ReturnCust>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type ReturnCustFilterInput = {
  and?: Maybe<Array<ReturnCustFilterInput>>;
  customerName?: Maybe<StringOperationFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<ReturnCustFilterInput>>;
  retCsubs?: Maybe<ListFilterInputTypeOfRetCsubFilterInput>;
  retDate?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  totalAmount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type ReturnCustInput = {
  customerName?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  retCsubs?: Maybe<Array<Maybe<RetCsubInput>>>;
  retDate?: Maybe<Scalars['DateTime']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type ReturnCustSortInput = {
  customerName?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  retDate?: Maybe<SortEnumType>;
  totalAmount?: Maybe<SortEnumType>;
};

export type ReturnSupp = {
  __typename?: 'ReturnSupp';
  id: Scalars['Long'];
  retDate?: Maybe<Scalars['DateTime']>;
  retSsubs?: Maybe<Array<Maybe<RetSsub>>>;
  supplierName?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type ReturnSuppCollectionSegment = {
  __typename?: 'ReturnSuppCollectionSegment';
  items?: Maybe<Array<Maybe<ReturnSupp>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type ReturnSuppFilterInput = {
  and?: Maybe<Array<ReturnSuppFilterInput>>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<ReturnSuppFilterInput>>;
  retDate?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  retSsubs?: Maybe<ListFilterInputTypeOfRetSsubFilterInput>;
  supplierName?: Maybe<StringOperationFilterInput>;
  totalAmount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type ReturnSuppInput = {
  id: Scalars['Long'];
  retDate?: Maybe<Scalars['DateTime']>;
  retSsubs?: Maybe<Array<Maybe<RetSsubInput>>>;
  supplierName?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type ReturnSuppSortInput = {
  id?: Maybe<SortEnumType>;
  retDate?: Maybe<SortEnumType>;
  supplierName?: Maybe<SortEnumType>;
  totalAmount?: Maybe<SortEnumType>;
};

export type SalGsub = {
  __typename?: 'SalGsub';
  id: Scalars['Long'];
  product?: Maybe<Scalars['Long']>;
  productNavigation?: Maybe<Product>;
  qdisc?: Maybe<Scalars['Decimal']>;
  quntity?: Maybe<Scalars['Decimal']>;
  salGlnk?: Maybe<Scalars['Long']>;
  salGlnkNavigation?: Maybe<SalesGood>;
  store?: Maybe<Scalars['Long']>;
  storeNavigation?: Maybe<Store>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unit?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Decimal']>;
};

export type SalGsubFilterInput = {
  and?: Maybe<Array<SalGsubFilterInput>>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<SalGsubFilterInput>>;
  product?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  productNavigation?: Maybe<ProductFilterInput>;
  qdisc?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  quntity?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  salGlnk?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  salGlnkNavigation?: Maybe<SalesGoodFilterInput>;
  store?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  storeNavigation?: Maybe<StoreFilterInput>;
  totalPrice?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  unit?: Maybe<StringOperationFilterInput>;
  unitPrice?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type SalGsubInput = {
  id: Scalars['Long'];
  product?: Maybe<Scalars['Long']>;
  productNavigation?: Maybe<ProductInput>;
  qdisc?: Maybe<Scalars['Decimal']>;
  quntity?: Maybe<Scalars['Decimal']>;
  salGlnk?: Maybe<Scalars['Long']>;
  salGlnkNavigation?: Maybe<SalesGoodInput>;
  store?: Maybe<Scalars['Long']>;
  storeNavigation?: Maybe<StoreInput>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unit?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Decimal']>;
};

export type SalesGood = {
  __typename?: 'SalesGood';
  customerName?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Decimal']>;
  id: Scalars['Long'];
  salGsubs?: Maybe<Array<Maybe<SalGsub>>>;
  saleDate?: Maybe<Scalars['DateTime']>;
  total?: Maybe<Scalars['Decimal']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type SalesGoodCollectionSegment = {
  __typename?: 'SalesGoodCollectionSegment';
  items?: Maybe<Array<Maybe<SalesGood>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type SalesGoodFilterInput = {
  and?: Maybe<Array<SalesGoodFilterInput>>;
  customerName?: Maybe<StringOperationFilterInput>;
  discount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<SalesGoodFilterInput>>;
  salGsubs?: Maybe<ListFilterInputTypeOfSalGsubFilterInput>;
  saleDate?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  total?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  totalAmount?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type SalesGoodInput = {
  customerName?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Decimal']>;
  id: Scalars['Long'];
  salGsubs?: Maybe<Array<Maybe<SalGsubInput>>>;
  saleDate?: Maybe<Scalars['DateTime']>;
  total?: Maybe<Scalars['Decimal']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type SalesGoodSortInput = {
  customerName?: Maybe<SortEnumType>;
  discount?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  saleDate?: Maybe<SortEnumType>;
  total?: Maybe<SortEnumType>;
  totalAmount?: Maybe<SortEnumType>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Store = {
  __typename?: 'Store';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  location?: Maybe<Scalars['String']>;
  recGsubs?: Maybe<Array<Maybe<RecGsub>>>;
  retSsubs?: Maybe<Array<Maybe<RetSsub>>>;
  salGsubs?: Maybe<Array<Maybe<SalGsub>>>;
};

export type StoreCollectionSegment = {
  __typename?: 'StoreCollectionSegment';
  items?: Maybe<Array<Maybe<Store>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type StoreFilterInput = {
  and?: Maybe<Array<StoreFilterInput>>;
  description?: Maybe<StringOperationFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  location?: Maybe<StringOperationFilterInput>;
  or?: Maybe<Array<StoreFilterInput>>;
  recGsubs?: Maybe<ListFilterInputTypeOfRecGsubFilterInput>;
  retSsubs?: Maybe<ListFilterInputTypeOfRetSsubFilterInput>;
  salGsubs?: Maybe<ListFilterInputTypeOfSalGsubFilterInput>;
};

export type StoreInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  location?: Maybe<Scalars['String']>;
  recGsubs?: Maybe<Array<Maybe<RecGsubInput>>>;
  retSsubs?: Maybe<Array<Maybe<RetSsubInput>>>;
  salGsubs?: Maybe<Array<Maybe<SalGsubInput>>>;
};

export type StoreSortInput = {
  description?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  location?: Maybe<SortEnumType>;
};

export type StringOperationFilterInput = {
  and?: Maybe<Array<StringOperationFilterInput>>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ncontains?: Maybe<Scalars['String']>;
  nendsWith?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  nstartsWith?: Maybe<Scalars['String']>;
  or?: Maybe<Array<StringOperationFilterInput>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  address?: Maybe<Scalars['String']>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  id: Scalars['Long'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Array<Scalars['Byte']>>;
  phone?: Maybe<Scalars['String']>;
};

export type SupplierCollectionSegment = {
  __typename?: 'SupplierCollectionSegment';
  items?: Maybe<Array<Maybe<Supplier>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type SupplierFilterInput = {
  address?: Maybe<StringOperationFilterInput>;
  and?: Maybe<Array<SupplierFilterInput>>;
  contacts?: Maybe<ListFilterInputTypeOfContactFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  mobile?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  note?: Maybe<ListComparableByteOperationFilterInput>;
  or?: Maybe<Array<SupplierFilterInput>>;
  phone?: Maybe<StringOperationFilterInput>;
};

export type SupplierInput = {
  address?: Maybe<Scalars['String']>;
  contacts?: Maybe<Array<Maybe<ContactInput>>>;
  id: Scalars['Long'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Array<Scalars['Byte']>>;
  phone?: Maybe<Scalars['String']>;
};

export type SupplierSortInput = {
  address?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  mobile?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  phone?: Maybe<SortEnumType>;
};

export type Uright = {
  __typename?: 'Uright';
  id: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  s01?: Maybe<Scalars['String']>;
  s02?: Maybe<Scalars['String']>;
  s03?: Maybe<Scalars['String']>;
  s04?: Maybe<Scalars['String']>;
  s05?: Maybe<Scalars['String']>;
  s06?: Maybe<Scalars['String']>;
  s07?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UrightCollectionSegment = {
  __typename?: 'UrightCollectionSegment';
  items?: Maybe<Array<Maybe<Uright>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type UrightFilterInput = {
  and?: Maybe<Array<UrightFilterInput>>;
  id?: Maybe<ComparableInt32OperationFilterInput>;
  or?: Maybe<Array<UrightFilterInput>>;
  password?: Maybe<StringOperationFilterInput>;
  s01?: Maybe<StringOperationFilterInput>;
  s02?: Maybe<StringOperationFilterInput>;
  s03?: Maybe<StringOperationFilterInput>;
  s04?: Maybe<StringOperationFilterInput>;
  s05?: Maybe<StringOperationFilterInput>;
  s06?: Maybe<StringOperationFilterInput>;
  s07?: Maybe<StringOperationFilterInput>;
  username?: Maybe<StringOperationFilterInput>;
};

export type UrightInput = {
  id: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  s01?: Maybe<Scalars['String']>;
  s02?: Maybe<Scalars['String']>;
  s03?: Maybe<Scalars['String']>;
  s04?: Maybe<Scalars['String']>;
  s05?: Maybe<Scalars['String']>;
  s06?: Maybe<Scalars['String']>;
  s07?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UrightSortInput = {
  id?: Maybe<SortEnumType>;
  password?: Maybe<SortEnumType>;
  s01?: Maybe<SortEnumType>;
  s02?: Maybe<SortEnumType>;
  s03?: Maybe<SortEnumType>;
  s04?: Maybe<SortEnumType>;
  s05?: Maybe<SortEnumType>;
  s06?: Maybe<SortEnumType>;
  s07?: Maybe<SortEnumType>;
  username?: Maybe<SortEnumType>;
};

export type WeeklyRepate = {
  __typename?: 'WeeklyRepate';
  date?: Maybe<Scalars['DateTime']>;
  employee?: Maybe<Scalars['Long']>;
  employeeNavigation?: Maybe<Employee>;
  id: Scalars['Long'];
  rebate?: Maybe<Scalars['Decimal']>;
};

export type WeeklyRepateCollectionSegment = {
  __typename?: 'WeeklyRepateCollectionSegment';
  items?: Maybe<Array<Maybe<WeeklyRepate>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type WeeklyRepateFilterInput = {
  and?: Maybe<Array<WeeklyRepateFilterInput>>;
  date?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  employee?: Maybe<ComparableNullableOfInt64OperationFilterInput>;
  employeeNavigation?: Maybe<EmployeeFilterInput>;
  id?: Maybe<ComparableInt64OperationFilterInput>;
  or?: Maybe<Array<WeeklyRepateFilterInput>>;
  rebate?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type WeeklyRepateInput = {
  date?: Maybe<Scalars['DateTime']>;
  employee?: Maybe<Scalars['Long']>;
  employeeNavigation?: Maybe<EmployeeInput>;
  id: Scalars['Long'];
  rebate?: Maybe<Scalars['Decimal']>;
};

export type WeeklyRepateSortInput = {
  date?: Maybe<SortEnumType>;
  employee?: Maybe<SortEnumType>;
  employeeNavigation?: Maybe<EmployeeSortInput>;
  id?: Maybe<SortEnumType>;
  rebate?: Maybe<SortEnumType>;
};

export type GetReturnSupportQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetReturnSupportQuery = { __typename?: 'Query', aReturnSupp?: { __typename?: 'ReturnSuppCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'ReturnSupp', id: any, supplierName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retSsubs?: Array<{ __typename?: 'RetSsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retSlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatReturnSuppMutationVariables = Exact<{
  input?: Maybe<ReturnSuppInput>;
}>;


export type CreatReturnSuppMutation = { __typename?: 'Mutation', addReturnSupp?: { __typename?: 'ReturnSupp', id: any, supplierName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retSsubs?: Array<{ __typename?: 'RetSsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retSlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdatReturnSuppMutationVariables = Exact<{
  input?: Maybe<ReturnSuppInput>;
}>;


export type UpdatReturnSuppMutation = { __typename?: 'Mutation', updateReturnSupp?: { __typename?: 'ReturnSupp', id: any, supplierName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retSsubs?: Array<{ __typename?: 'RetSsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retSlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteReturnSuppMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteReturnSuppMutation = { __typename?: 'Mutation', deleteReturnSupp?: { __typename?: 'ReturnSupp', id: any, supplierName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retSsubs?: Array<{ __typename?: 'RetSsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retSlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetReturnSupportByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetReturnSupportByIdQuery = { __typename?: 'Query', aReturnSupp?: { __typename?: 'ReturnSuppCollectionSegment', items?: Array<{ __typename?: 'ReturnSupp', id: any, supplierName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retSsubs?: Array<{ __typename?: 'RetSsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retSlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetClassQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetClassQuery = { __typename?: 'Query', accClass?: { __typename?: 'AccClassCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'AccClass', id: any, description?: string | null | undefined, type?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatAccClassMutationVariables = Exact<{
  input?: Maybe<AccClassInput>;
}>;


export type CreatAccClassMutation = { __typename?: 'Mutation', addAccClass?: { __typename?: 'AccClass', id: any, description?: string | null | undefined, type?: string | null | undefined } | null | undefined };

export type UpdatAccClassMutationVariables = Exact<{
  input?: Maybe<AccClassInput>;
}>;


export type UpdatAccClassMutation = { __typename?: 'Mutation', updateAccClass?: { __typename?: 'AccClass', id: any, description?: string | null | undefined, type?: string | null | undefined } | null | undefined };

export type DeleteAccClassMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteAccClassMutation = { __typename?: 'Mutation', deleteAccClass?: { __typename?: 'AccClass', id: any, description?: string | null | undefined, type?: string | null | undefined } | null | undefined };

export type GetAccClassByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['Long']>;
}>;


export type GetAccClassByIdQuery = { __typename?: 'Query', accClass?: { __typename?: 'AccClassCollectionSegment', items?: Array<{ __typename?: 'AccClass', id: any, description?: string | null | undefined, type?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetAttendanceQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetAttendanceQuery = { __typename?: 'Query', aAttendance?: { __typename?: 'AttendanceCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatAttendanceMutationVariables = Exact<{
  input?: Maybe<AttendanceInput>;
}>;


export type CreatAttendanceMutation = { __typename?: 'Mutation', addAttendance?: { __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdatAttendanceMutationVariables = Exact<{
  input?: Maybe<AttendanceInput>;
}>;


export type UpdatAttendanceMutation = { __typename?: 'Mutation', updateAttendance?: { __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined };

export type DeleteAttendanceMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteAttendanceMutation = { __typename?: 'Mutation', deleteAttendance?: { __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined };

export type GetAttendanceByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['Long']>;
}>;


export type GetAttendanceByIdQuery = { __typename?: 'Query', aAttendance?: { __typename?: 'AttendanceCollectionSegment', items?: Array<{ __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetBankQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetBankQuery = { __typename?: 'Query', aBank?: { __typename?: 'BankCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Bank', id: number, name?: string | null | undefined, account?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatBankMutationVariables = Exact<{
  input?: Maybe<BankInput>;
}>;


export type CreatBankMutation = { __typename?: 'Mutation', addBank?: { __typename?: 'Bank', id: number, name?: string | null | undefined, account?: string | null | undefined } | null | undefined };

export type UpdatBankMutationVariables = Exact<{
  input?: Maybe<BankInput>;
}>;


export type UpdatBankMutation = { __typename?: 'Mutation', updateBank?: { __typename?: 'Bank', id: number, name?: string | null | undefined, account?: string | null | undefined } | null | undefined };

export type DeleteBankMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteBankMutation = { __typename?: 'Mutation', deleteBank?: { __typename?: 'Bank', id: number, name?: string | null | undefined, account?: string | null | undefined } | null | undefined };

export type GetBankByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBankByIdQuery = { __typename?: 'Query', aBank?: { __typename?: 'BankCollectionSegment', items?: Array<{ __typename?: 'Bank', id: number, name?: string | null | undefined, account?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetCashQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetCashQuery = { __typename?: 'Query', aCashRec?: { __typename?: 'CashRecCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'CashRec', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, supplierName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, reciveNo?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdateCashMutationVariables = Exact<{
  input?: Maybe<CashRecInput>;
}>;


export type UpdateCashMutation = { __typename?: 'Mutation', updateCashRec?: { __typename?: 'CashRec', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, supplierName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, reciveNo?: any | null | undefined } | null | undefined };

export type CreateCashMutationVariables = Exact<{
  input?: Maybe<CashRecInput>;
}>;


export type CreateCashMutation = { __typename?: 'Mutation', addCashRec?: { __typename?: 'CashRec', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, supplierName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, reciveNo?: any | null | undefined } | null | undefined };

export type DeleteCashMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteCashMutation = { __typename?: 'Mutation', deleteCashRec?: { __typename?: 'CashRec', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, supplierName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, reciveNo?: any | null | undefined } | null | undefined };

export type GetCashByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetCashByIdQuery = { __typename?: 'Query', aCashRec?: { __typename?: 'CashRecCollectionSegment', items?: Array<{ __typename?: 'CashRec', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, supplierName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, reciveNo?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetCustomerQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetCustomerQuery = { __typename?: 'Query', aCustomer?: { __typename?: 'CustomerCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Customer', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatCustomerMutationVariables = Exact<{
  input?: Maybe<CustomerInput>;
}>;


export type CreatCustomerMutation = { __typename?: 'Mutation', addCustomer?: { __typename?: 'Customer', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdatCustomerMutationVariables = Exact<{
  input?: Maybe<CustomerInput>;
}>;


export type UpdatCustomerMutation = { __typename?: 'Mutation', updateCustomer?: { __typename?: 'Customer', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteCustomerMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteCustomerMutation = { __typename?: 'Mutation', deleteCustomer?: { __typename?: 'Customer', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetCustomerByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetCustomerByIdQuery = { __typename?: 'Query', aCustomer?: { __typename?: 'CustomerCollectionSegment', items?: Array<{ __typename?: 'Customer', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetEmployersQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetEmployersQuery = { __typename?: 'Query', aEmployee?: { __typename?: 'EmployeeCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Employee', id: any, name?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, mobile?: string | null | undefined, salarySystem?: string | null | undefined, salaryValue?: any | null | undefined, attendances?: Array<{ __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatEmployerMutationVariables = Exact<{
  input?: Maybe<EmployeeInput>;
}>;


export type CreatEmployerMutation = { __typename?: 'Mutation', addEmployee?: { __typename?: 'Employee', id: any, name?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, mobile?: string | null | undefined, salarySystem?: string | null | undefined, salaryValue?: any | null | undefined, attendances?: Array<{ __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdatEmployerMutationVariables = Exact<{
  input?: Maybe<EmployeeInput>;
}>;


export type UpdatEmployerMutation = { __typename?: 'Mutation', updateEmployee?: { __typename?: 'Employee', id: any, name?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, mobile?: string | null | undefined, salarySystem?: string | null | undefined, salaryValue?: any | null | undefined, attendances?: Array<{ __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteEmployerMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteEmployerMutation = { __typename?: 'Mutation', deleteEmployee?: { __typename?: 'Employee', id: any, name?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, mobile?: string | null | undefined, salarySystem?: string | null | undefined, salaryValue?: any | null | undefined, attendances?: Array<{ __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetEmployerByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetEmployerByIdQuery = { __typename?: 'Query', aEmployee?: { __typename?: 'EmployeeCollectionSegment', items?: Array<{ __typename?: 'Employee', id: any, name?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, mobile?: string | null | undefined, salarySystem?: string | null | undefined, salaryValue?: any | null | undefined, attendances?: Array<{ __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type FragmentClassFragment = { __typename?: 'AccClass', id: any, description?: string | null | undefined, type?: string | null | undefined };

export type EmployerFragmentFragment = { __typename?: 'Employee', id: any, name?: string | null | undefined, address?: string | null | undefined, phone?: string | null | undefined, mobile?: string | null | undefined, salarySystem?: string | null | undefined, salaryValue?: any | null | undefined, attendances?: Array<{ __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type AttendanceFragmentFragment = { __typename?: 'Attendance', id: any, dcheck?: string | null | undefined, date?: any | null | undefined, employeeNavigation?: { __typename?: 'Employee', name?: string | null | undefined } | null | undefined };

export type BankFragmentFragment = { __typename?: 'Bank', id: number, name?: string | null | undefined, account?: string | null | undefined };

export type CashFragmentFragment = { __typename?: 'CashRec', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, supplierName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, reciveNo?: any | null | undefined };

export type CustomerFragmentFragment = { __typename?: 'Customer', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined };

export type ContactsFragmentFragment = { __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined };

export type SupplierFragmentFragment = { __typename?: 'Supplier', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined };

export type ProductClassFragmentFragment = { __typename?: 'ProdClass', id: number, description?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type ProductFragmentFragment = { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined };

export type ReceptFragmentFragment = { __typename?: 'Receipt', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, customerName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, checkBank?: string | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, saleNo?: any | null | undefined };

export type RecGoodFragmentFragment = { __typename?: 'RecGood', id: any, supplierName?: string | null | undefined, invoiceNo?: any | null | undefined, recivingData?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, recGsubs?: Array<{ __typename?: 'RecGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quantity?: any | null | undefined, qafterDiscount?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, recGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type RecGsubsFragmentFragment = { __typename?: 'RecGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quantity?: any | null | undefined, qafterDiscount?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, recGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined };

export type StoreFragmentFragment = { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined };

export type ReturnCustomerFragmentFragment = { __typename?: 'ReturnCust', id: any, customerName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retCsubs?: Array<{ __typename?: 'RetCsub', id: any, store?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retClnk?: any | null | undefined, product?: any | null | undefined, produnit?: Array<any> | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type RetCsubsFragmementFragment = { __typename?: 'RetCsub', id: any, store?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retClnk?: any | null | undefined, product?: any | null | undefined, produnit?: Array<any> | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined };

export type ReturnSupportFragmentFragment = { __typename?: 'ReturnSupp', id: any, supplierName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retSsubs?: Array<{ __typename?: 'RetSsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retSlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type RetSsubsFragmentFragment = { __typename?: 'RetSsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retSlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined };

export type SalesGoodFragmentFragment = { __typename?: 'SalesGood', id: any, customerName?: string | null | undefined, saleDate?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, salGsubs?: Array<{ __typename?: 'SalGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, unit?: string | null | undefined, qdisc?: any | null | undefined, salGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type SalGsubsFragmentFragment = { __typename?: 'SalGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, unit?: string | null | undefined, qdisc?: any | null | undefined, salGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined };

export type RightFragmentFragment = { __typename?: 'Uright', id: number, username?: string | null | undefined, password?: string | null | undefined, s01?: string | null | undefined, s02?: string | null | undefined, s03?: string | null | undefined, s04?: string | null | undefined, s05?: string | null | undefined, s06?: string | null | undefined };

export type WeaklyReapateFragmentFragment = { __typename?: 'WeeklyRepate', id: any, date?: any | null | undefined, rebate?: any | null | undefined, employee?: any | null | undefined };

export type GetProductQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetProductQuery = { __typename?: 'Query', aProduct?: { __typename?: 'ProductCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatProductMutationVariables = Exact<{
  input?: Maybe<ProductInput>;
}>;


export type CreatProductMutation = { __typename?: 'Mutation', addProduct?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdatProductMutationVariables = Exact<{
  input?: Maybe<ProductInput>;
}>;


export type UpdatProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined };

export type DeleteProductMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined };

export type GetProductByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['Long']>;
}>;


export type GetProductByIdQuery = { __typename?: 'Query', aProduct?: { __typename?: 'ProductCollectionSegment', items?: Array<{ __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetProductClassQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetProductClassQuery = { __typename?: 'Query', aProdClass?: { __typename?: 'ProdClassCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'ProdClass', id: number, description?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatProductClassMutationVariables = Exact<{
  input?: Maybe<ProdClassInput>;
}>;


export type CreatProductClassMutation = { __typename?: 'Mutation', addProdClass?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdatProductClassMutationVariables = Exact<{
  input?: Maybe<ProdClassInput>;
}>;


export type UpdatProductClassMutation = { __typename?: 'Mutation', updateProdClass?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteProductClassMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteProductClassMutation = { __typename?: 'Mutation', deleteProdClass?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetProductClassByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductClassByIdQuery = { __typename?: 'Query', aProdClass?: { __typename?: 'ProdClassCollectionSegment', items?: Array<{ __typename?: 'ProdClass', id: number, description?: string | null | undefined, products?: Array<{ __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetRecGoodQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetRecGoodQuery = { __typename?: 'Query', aRecGood?: { __typename?: 'RecGoodCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'RecGood', id: any, supplierName?: string | null | undefined, invoiceNo?: any | null | undefined, recivingData?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, recGsubs?: Array<{ __typename?: 'RecGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quantity?: any | null | undefined, qafterDiscount?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, recGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatRecGoodMutationVariables = Exact<{
  input?: Maybe<RecGoodInput>;
}>;


export type CreatRecGoodMutation = { __typename?: 'Mutation', addRecGood?: { __typename?: 'RecGood', id: any, supplierName?: string | null | undefined, invoiceNo?: any | null | undefined, recivingData?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, recGsubs?: Array<{ __typename?: 'RecGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quantity?: any | null | undefined, qafterDiscount?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, recGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdateRecGoodMutationVariables = Exact<{
  input?: Maybe<RecGoodInput>;
}>;


export type UpdateRecGoodMutation = { __typename?: 'Mutation', updateRecGood?: { __typename?: 'RecGood', id: any, supplierName?: string | null | undefined, invoiceNo?: any | null | undefined, recivingData?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, recGsubs?: Array<{ __typename?: 'RecGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quantity?: any | null | undefined, qafterDiscount?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, recGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteRecGoodMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteRecGoodMutation = { __typename?: 'Mutation', deleteRecGood?: { __typename?: 'RecGood', id: any, supplierName?: string | null | undefined, invoiceNo?: any | null | undefined, recivingData?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, recGsubs?: Array<{ __typename?: 'RecGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quantity?: any | null | undefined, qafterDiscount?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, recGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetRecGoodByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetRecGoodByIdQuery = { __typename?: 'Query', aRecGood?: { __typename?: 'RecGoodCollectionSegment', items?: Array<{ __typename?: 'RecGood', id: any, supplierName?: string | null | undefined, invoiceNo?: any | null | undefined, recivingData?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, recGsubs?: Array<{ __typename?: 'RecGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, produnit?: string | null | undefined, quantity?: any | null | undefined, qafterDiscount?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, recGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetReceptQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetReceptQuery = { __typename?: 'Query', aReceipt?: { __typename?: 'ReceiptCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Receipt', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, customerName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, checkBank?: string | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, saleNo?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatReceptMutationVariables = Exact<{
  input?: Maybe<ReceiptInput>;
}>;


export type CreatReceptMutation = { __typename?: 'Mutation', addReceipt?: { __typename?: 'Receipt', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, customerName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, checkBank?: string | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, saleNo?: any | null | undefined } | null | undefined };

export type UpdatReceptMutationVariables = Exact<{
  input?: Maybe<ReceiptInput>;
}>;


export type UpdatReceptMutation = { __typename?: 'Mutation', updateReceipt?: { __typename?: 'Receipt', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, customerName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, checkBank?: string | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, saleNo?: any | null | undefined } | null | undefined };

export type DeleteReceptMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteReceptMutation = { __typename?: 'Mutation', deleteReceipt?: { __typename?: 'Receipt', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, customerName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, checkBank?: string | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, saleNo?: any | null | undefined } | null | undefined };

export type GetReceptByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetReceptByIdQuery = { __typename?: 'Query', aReceipt?: { __typename?: 'ReceiptCollectionSegment', items?: Array<{ __typename?: 'Receipt', id: any, docClass?: any | null | undefined, amount?: any | null | undefined, docDate?: any | null | undefined, customerName?: string | null | undefined, payType?: string | null | undefined, checkno?: string | null | undefined, checkDate?: any | null | undefined, checkBank?: string | null | undefined, bankName?: string | null | undefined, bankAccount?: string | null | undefined, saleNo?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetReturnCustomerQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetReturnCustomerQuery = { __typename?: 'Query', aReturnCust?: { __typename?: 'ReturnCustCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'ReturnCust', id: any, customerName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retCsubs?: Array<{ __typename?: 'RetCsub', id: any, store?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retClnk?: any | null | undefined, product?: any | null | undefined, produnit?: Array<any> | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatReturnCustMutationVariables = Exact<{
  input?: Maybe<ReturnCustInput>;
}>;


export type CreatReturnCustMutation = { __typename?: 'Mutation', addReturnCust?: { __typename?: 'ReturnCust', id: any, customerName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retCsubs?: Array<{ __typename?: 'RetCsub', id: any, store?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retClnk?: any | null | undefined, product?: any | null | undefined, produnit?: Array<any> | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdatReturnCustMutationVariables = Exact<{
  input?: Maybe<ReturnCustInput>;
}>;


export type UpdatReturnCustMutation = { __typename?: 'Mutation', updateReturnCust?: { __typename?: 'ReturnCust', id: any, customerName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retCsubs?: Array<{ __typename?: 'RetCsub', id: any, store?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retClnk?: any | null | undefined, product?: any | null | undefined, produnit?: Array<any> | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteReturnCustMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteReturnCustMutation = { __typename?: 'Mutation', deleteReturnCust?: { __typename?: 'ReturnCust', id: any, customerName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retCsubs?: Array<{ __typename?: 'RetCsub', id: any, store?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retClnk?: any | null | undefined, product?: any | null | undefined, produnit?: Array<any> | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetReturnCustomerByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetReturnCustomerByIdQuery = { __typename?: 'Query', aReturnCust?: { __typename?: 'ReturnCustCollectionSegment', items?: Array<{ __typename?: 'ReturnCust', id: any, customerName?: string | null | undefined, retDate?: any | null | undefined, totalAmount?: any | null | undefined, retCsubs?: Array<{ __typename?: 'RetCsub', id: any, store?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, retAccTypr?: string | null | undefined, retClnk?: any | null | undefined, product?: any | null | undefined, produnit?: Array<any> | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetSalesGoodQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetSalesGoodQuery = { __typename?: 'Query', aSalesGood?: { __typename?: 'SalesGoodCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'SalesGood', id: any, customerName?: string | null | undefined, saleDate?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, salGsubs?: Array<{ __typename?: 'SalGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, unit?: string | null | undefined, qdisc?: any | null | undefined, salGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatSalesGoodMutationVariables = Exact<{
  input?: Maybe<SalesGoodInput>;
}>;


export type CreatSalesGoodMutation = { __typename?: 'Mutation', addDelivery?: { __typename?: 'SalesGood', id: any, customerName?: string | null | undefined, saleDate?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, salGsubs?: Array<{ __typename?: 'SalGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, unit?: string | null | undefined, qdisc?: any | null | undefined, salGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdateSalesGoodMutationVariables = Exact<{
  input?: Maybe<SalesGoodInput>;
}>;


export type UpdateSalesGoodMutation = { __typename?: 'Mutation', updateDelivery?: { __typename?: 'SalesGood', id: any, customerName?: string | null | undefined, saleDate?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, salGsubs?: Array<{ __typename?: 'SalGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, unit?: string | null | undefined, qdisc?: any | null | undefined, salGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteSalesGoodMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteSalesGoodMutation = { __typename?: 'Mutation', deleteDelivery?: { __typename?: 'SalesGood', id: any, customerName?: string | null | undefined, saleDate?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, salGsubs?: Array<{ __typename?: 'SalGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, unit?: string | null | undefined, qdisc?: any | null | undefined, salGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetSalesGoodByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetSalesGoodByIdQuery = { __typename?: 'Query', aSalesGood?: { __typename?: 'SalesGoodCollectionSegment', items?: Array<{ __typename?: 'SalesGood', id: any, customerName?: string | null | undefined, saleDate?: any | null | undefined, totalAmount?: any | null | undefined, discount?: any | null | undefined, total?: any | null | undefined, salGsubs?: Array<{ __typename?: 'SalGsub', id: any, store?: any | null | undefined, product?: any | null | undefined, quntity?: any | null | undefined, unitPrice?: any | null | undefined, totalPrice?: any | null | undefined, unit?: string | null | undefined, qdisc?: any | null | undefined, salGlnk?: any | null | undefined, productNavigation?: { __typename?: 'Product', id: any, description?: string | null | undefined, classification?: number | null | undefined, classificationNavigation?: { __typename?: 'ProdClass', id: number, description?: string | null | undefined } | null | undefined } | null | undefined, storeNavigation?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetStoreQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetStoreQuery = { __typename?: 'Query', aStore?: { __typename?: 'StoreCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatStoreMutationVariables = Exact<{
  input?: Maybe<StoreInput>;
}>;


export type CreatStoreMutation = { __typename?: 'Mutation', addStore?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined };

export type UpdatStoreMutationVariables = Exact<{
  input?: Maybe<StoreInput>;
}>;


export type UpdatStoreMutation = { __typename?: 'Mutation', updateStore?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined };

export type DeleteStoreMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteStoreMutation = { __typename?: 'Mutation', deleteStore?: { __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined };

export type GetStoreByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetStoreByIdQuery = { __typename?: 'Query', aStore?: { __typename?: 'StoreCollectionSegment', items?: Array<{ __typename?: 'Store', id: any, description?: string | null | undefined, location?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetSupplierQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetSupplierQuery = { __typename?: 'Query', aSupplier?: { __typename?: 'SupplierCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Supplier', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatSupplierMutationVariables = Exact<{
  input?: Maybe<SupplierInput>;
}>;


export type CreatSupplierMutation = { __typename?: 'Mutation', addSupplier?: { __typename?: 'Supplier', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdatSupplierMutationVariables = Exact<{
  input?: Maybe<SupplierInput>;
}>;


export type UpdatSupplierMutation = { __typename?: 'Mutation', updateSupplier?: { __typename?: 'Supplier', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteSupplierMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteSupplierMutation = { __typename?: 'Mutation', deleteSupplier?: { __typename?: 'Supplier', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetSupplierByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetSupplierByIdQuery = { __typename?: 'Query', aSupplier?: { __typename?: 'SupplierCollectionSegment', items?: Array<{ __typename?: 'Supplier', id: any, name?: string | null | undefined, address?: string | null | undefined, mobile?: string | null | undefined, phone?: string | null | undefined, note?: Array<any> | null | undefined, contacts?: Array<{ __typename?: 'Contact', id: number, name?: string | null | undefined, mobile?: string | null | undefined, mobile2?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetRightQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetRightQuery = { __typename?: 'Query', uright?: { __typename?: 'UrightCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Uright', id: number, username?: string | null | undefined, password?: string | null | undefined, s01?: string | null | undefined, s02?: string | null | undefined, s03?: string | null | undefined, s04?: string | null | undefined, s05?: string | null | undefined, s06?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatRightMutationVariables = Exact<{
  input?: Maybe<UrightInput>;
}>;


export type CreatRightMutation = { __typename?: 'Mutation', addUright?: { __typename?: 'Uright', id: number, username?: string | null | undefined, password?: string | null | undefined, s01?: string | null | undefined, s02?: string | null | undefined, s03?: string | null | undefined, s04?: string | null | undefined, s05?: string | null | undefined, s06?: string | null | undefined } | null | undefined };

export type UpdatRightMutationVariables = Exact<{
  input?: Maybe<UrightInput>;
}>;


export type UpdatRightMutation = { __typename?: 'Mutation', updateUright?: { __typename?: 'Uright', id: number, username?: string | null | undefined, password?: string | null | undefined, s01?: string | null | undefined, s02?: string | null | undefined, s03?: string | null | undefined, s04?: string | null | undefined, s05?: string | null | undefined, s06?: string | null | undefined } | null | undefined };

export type DeleteRightMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteRightMutation = { __typename?: 'Mutation', deleteUright?: { __typename?: 'Uright', id: number, username?: string | null | undefined, password?: string | null | undefined, s01?: string | null | undefined, s02?: string | null | undefined, s03?: string | null | undefined, s04?: string | null | undefined, s05?: string | null | undefined, s06?: string | null | undefined } | null | undefined };

export type GetUrightByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUrightByIdQuery = { __typename?: 'Query', uright?: { __typename?: 'UrightCollectionSegment', items?: Array<{ __typename?: 'Uright', id: number, username?: string | null | undefined, password?: string | null | undefined, s01?: string | null | undefined, s02?: string | null | undefined, s03?: string | null | undefined, s04?: string | null | undefined, s05?: string | null | undefined, s06?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetWeaklyReapateQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetWeaklyReapateQuery = { __typename?: 'Query', aWeeklyRepate?: { __typename?: 'WeeklyRepateCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'WeeklyRepate', id: any, date?: any | null | undefined, rebate?: any | null | undefined, employee?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreatWeaklyReapateMutationVariables = Exact<{
  input?: Maybe<WeeklyRepateInput>;
}>;


export type CreatWeaklyReapateMutation = { __typename?: 'Mutation', addWeeklyRepate?: { __typename?: 'WeeklyRepate', id: any, date?: any | null | undefined, rebate?: any | null | undefined, employee?: any | null | undefined } | null | undefined };

export type UpdatWeaklyReapateMutationVariables = Exact<{
  input?: Maybe<WeeklyRepateInput>;
}>;


export type UpdatWeaklyReapateMutation = { __typename?: 'Mutation', updateWeeklyRepate?: { __typename?: 'WeeklyRepate', id: any, date?: any | null | undefined, rebate?: any | null | undefined, employee?: any | null | undefined } | null | undefined };

export type DeleteWeaklyReapateMutationVariables = Exact<{
  input: Scalars['Long'];
}>;


export type DeleteWeaklyReapateMutation = { __typename?: 'Mutation', deleteWeeklyRepate?: { __typename?: 'WeeklyRepate', id: any, date?: any | null | undefined, rebate?: any | null | undefined, employee?: any | null | undefined } | null | undefined };

export type GetWeaklyReapateByIdQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type GetWeaklyReapateByIdQuery = { __typename?: 'Query', aWeeklyRepate?: { __typename?: 'WeeklyRepateCollectionSegment', items?: Array<{ __typename?: 'WeeklyRepate', id: any, date?: any | null | undefined, rebate?: any | null | undefined, employee?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export const FragmentClassFragmentDoc = `
    fragment fragmentClass on AccClass {
  id
  description
  type
}
    `;
export const AttendanceFragmentFragmentDoc = `
    fragment AttendanceFragment on Attendance {
  id
  dcheck
  date
  employeeNavigation {
    name
  }
}
    `;
export const EmployerFragmentFragmentDoc = `
    fragment EmployerFragment on Employee {
  id
  name
  address
  phone
  mobile
  salarySystem
  salaryValue
  attendances {
    ...AttendanceFragment
  }
}
    ${AttendanceFragmentFragmentDoc}`;
export const BankFragmentFragmentDoc = `
    fragment BankFragment on Bank {
  id
  name
  account
}
    `;
export const CashFragmentFragmentDoc = `
    fragment CashFragment on CashRec {
  id
  docClass
  amount
  docDate
  supplierName
  payType
  checkno
  checkDate
  bankName
  bankAccount
  reciveNo
}
    `;
export const ContactsFragmentFragmentDoc = `
    fragment ContactsFragment on Contact {
  id
  name
  mobile
  mobile2
}
    `;
export const CustomerFragmentFragmentDoc = `
    fragment CustomerFragment on Customer {
  id
  name
  address
  mobile
  phone
  note
  contacts {
    ...ContactsFragment
  }
}
    ${ContactsFragmentFragmentDoc}`;
export const SupplierFragmentFragmentDoc = `
    fragment SupplierFragment on Supplier {
  id
  name
  address
  mobile
  phone
  note
  contacts {
    ...ContactsFragment
  }
}
    ${ContactsFragmentFragmentDoc}`;
export const ProductFragmentFragmentDoc = `
    fragment ProductFragment on Product {
  id
  description
  classification
  classificationNavigation {
    id
    description
  }
}
    `;
export const ProductClassFragmentFragmentDoc = `
    fragment ProductClassFragment on ProdClass {
  id
  description
  products {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export const ReceptFragmentFragmentDoc = `
    fragment ReceptFragment on Receipt {
  id
  docClass
  amount
  docDate
  customerName
  payType
  checkno
  checkDate
  checkBank
  bankName
  bankAccount
  saleNo
}
    `;
export const StoreFragmentFragmentDoc = `
    fragment StoreFragment on Store {
  id
  description
  location
}
    `;
export const RecGsubsFragmentFragmentDoc = `
    fragment recGsubsFragment on RecGsub {
  id
  store
  product
  produnit
  quantity
  qafterDiscount
  unitPrice
  totalPrice
  recGlnk
  productNavigation {
    ...ProductFragment
  }
  storeNavigation {
    ...StoreFragment
  }
}
    ${ProductFragmentFragmentDoc}
${StoreFragmentFragmentDoc}`;
export const RecGoodFragmentFragmentDoc = `
    fragment RecGoodFragment on RecGood {
  id
  supplierName
  invoiceNo
  recivingData
  totalAmount
  discount
  total
  recGsubs {
    ...recGsubsFragment
  }
}
    ${RecGsubsFragmentFragmentDoc}`;
export const RetCsubsFragmementFragmentDoc = `
    fragment retCsubsFragmement on RetCsub {
  id
  store
  quntity
  unitPrice
  totalPrice
  retAccTypr
  retClnk
  product
  produnit
  productNavigation {
    ...ProductFragment
  }
  storeNavigation {
    ...StoreFragment
  }
}
    ${ProductFragmentFragmentDoc}
${StoreFragmentFragmentDoc}`;
export const ReturnCustomerFragmentFragmentDoc = `
    fragment ReturnCustomerFragment on ReturnCust {
  id
  customerName
  retDate
  totalAmount
  retCsubs {
    ...retCsubsFragmement
  }
}
    ${RetCsubsFragmementFragmentDoc}`;
export const RetSsubsFragmentFragmentDoc = `
    fragment retSsubsFragment on RetSsub {
  id
  store
  product
  produnit
  quntity
  unitPrice
  totalPrice
  retAccTypr
  retSlnk
  productNavigation {
    ...ProductFragment
  }
  storeNavigation {
    ...StoreFragment
  }
}
    ${ProductFragmentFragmentDoc}
${StoreFragmentFragmentDoc}`;
export const ReturnSupportFragmentFragmentDoc = `
    fragment ReturnSupportFragment on ReturnSupp {
  id
  supplierName
  retDate
  totalAmount
  retSsubs {
    ...retSsubsFragment
  }
}
    ${RetSsubsFragmentFragmentDoc}`;
export const SalGsubsFragmentFragmentDoc = `
    fragment salGsubsFragment on SalGsub {
  id
  store
  product
  quntity
  unitPrice
  totalPrice
  unit
  qdisc
  salGlnk
  productNavigation {
    ...ProductFragment
  }
  storeNavigation {
    ...StoreFragment
  }
}
    ${ProductFragmentFragmentDoc}
${StoreFragmentFragmentDoc}`;
export const SalesGoodFragmentFragmentDoc = `
    fragment SalesGoodFragment on SalesGood {
  id
  customerName
  saleDate
  totalAmount
  discount
  total
  salGsubs {
    ...salGsubsFragment
  }
}
    ${SalGsubsFragmentFragmentDoc}`;
export const RightFragmentFragmentDoc = `
    fragment RightFragment on Uright {
  id
  username
  password
  s01
  s02
  s03
  s04
  s05
  s06
}
    `;
export const WeaklyReapateFragmentFragmentDoc = `
    fragment WeaklyReapateFragment on WeeklyRepate {
  id
  date
  rebate
  employee
}
    `;
export const GetReturnSupportDocument = `
    query getReturnSupport($take: Int, $skip: Int) {
  aReturnSupp(take: $take, skip: $skip) {
    totalCount
    items {
      ...ReturnSupportFragment
    }
  }
}
    ${ReturnSupportFragmentFragmentDoc}`;
export const CreatReturnSuppDocument = `
    mutation creatReturnSupp($input: ReturnSuppInput) {
  addReturnSupp(returnSupp: $input) {
    ...ReturnSupportFragment
  }
}
    ${ReturnSupportFragmentFragmentDoc}`;
export const UpdatReturnSuppDocument = `
    mutation updatReturnSupp($input: ReturnSuppInput) {
  updateReturnSupp(returnSupp: $input) {
    ...ReturnSupportFragment
  }
}
    ${ReturnSupportFragmentFragmentDoc}`;
export const DeleteReturnSuppDocument = `
    mutation deleteReturnSupp($input: Long!) {
  deleteReturnSupp(id: $input) {
    ...ReturnSupportFragment
  }
}
    ${ReturnSupportFragmentFragmentDoc}`;
export const GetReturnSupportByIdDocument = `
    query getReturnSupportById($id: Long!) {
  aReturnSupp(where: {id: {eq: $id}}) {
    items {
      ...ReturnSupportFragment
    }
  }
}
    ${ReturnSupportFragmentFragmentDoc}`;
export const GetClassDocument = `
    query getClass($take: Int, $skip: Int) {
  accClass(take: $take, skip: $skip) {
    totalCount
    items {
      ...fragmentClass
    }
  }
}
    ${FragmentClassFragmentDoc}`;
export const CreatAccClassDocument = `
    mutation creatAccClass($input: AccClassInput) {
  addAccClass(accClass: $input) {
    ...fragmentClass
  }
}
    ${FragmentClassFragmentDoc}`;
export const UpdatAccClassDocument = `
    mutation updatAccClass($input: AccClassInput) {
  updateAccClass(accClass: $input) {
    ...fragmentClass
  }
}
    ${FragmentClassFragmentDoc}`;
export const DeleteAccClassDocument = `
    mutation deleteAccClass($input: Long!) {
  deleteAccClass(id: $input) {
    ...fragmentClass
  }
}
    ${FragmentClassFragmentDoc}`;
export const GetAccClassByIdDocument = `
    query getAccClassById($id: Long) {
  accClass(where: {id: {eq: $id}}) {
    items {
      ...fragmentClass
    }
  }
}
    ${FragmentClassFragmentDoc}`;
export const GetAttendanceDocument = `
    query getAttendance($take: Int, $skip: Int) {
  aAttendance(take: $take, skip: $skip) {
    totalCount
    items {
      ...AttendanceFragment
    }
  }
}
    ${AttendanceFragmentFragmentDoc}`;
export const CreatAttendanceDocument = `
    mutation creatAttendance($input: AttendanceInput) {
  addAttendance(attendance: $input) {
    ...AttendanceFragment
  }
}
    ${AttendanceFragmentFragmentDoc}`;
export const UpdatAttendanceDocument = `
    mutation updatAttendance($input: AttendanceInput) {
  updateAttendance(attendance: $input) {
    ...AttendanceFragment
  }
}
    ${AttendanceFragmentFragmentDoc}`;
export const DeleteAttendanceDocument = `
    mutation deleteAttendance($input: Long!) {
  deleteAttendance(id: $input) {
    ...AttendanceFragment
  }
}
    ${AttendanceFragmentFragmentDoc}`;
export const GetAttendanceByIdDocument = `
    query getAttendanceById($id: Long) {
  aAttendance(where: {id: {eq: $id}}) {
    items {
      ...AttendanceFragment
    }
  }
}
    ${AttendanceFragmentFragmentDoc}`;
export const GetBankDocument = `
    query getBank($take: Int, $skip: Int) {
  aBank(take: $take, skip: $skip) {
    totalCount
    items {
      ...BankFragment
    }
  }
}
    ${BankFragmentFragmentDoc}`;
export const CreatBankDocument = `
    mutation creatBank($input: BankInput) {
  addBank(bank: $input) {
    ...BankFragment
  }
}
    ${BankFragmentFragmentDoc}`;
export const UpdatBankDocument = `
    mutation updatBank($input: BankInput) {
  updateBank(bank: $input) {
    ...BankFragment
  }
}
    ${BankFragmentFragmentDoc}`;
export const DeleteBankDocument = `
    mutation deleteBank($input: Long!) {
  deleteBank(id: $input) {
    ...BankFragment
  }
}
    ${BankFragmentFragmentDoc}`;
export const GetBankByIdDocument = `
    query getBankById($id: Int!) {
  aBank(where: {id: {eq: $id}}) {
    items {
      ...BankFragment
    }
  }
}
    ${BankFragmentFragmentDoc}`;
export const GetCashDocument = `
    query getCash($take: Int, $skip: Int) {
  aCashRec(take: $take, skip: $skip) {
    totalCount
    items {
      ...CashFragment
    }
  }
}
    ${CashFragmentFragmentDoc}`;
export const UpdateCashDocument = `
    mutation updateCash($input: CashRecInput) {
  updateCashRec(cashRec: $input) {
    ...CashFragment
  }
}
    ${CashFragmentFragmentDoc}`;
export const CreateCashDocument = `
    mutation createCash($input: CashRecInput) {
  addCashRec(cashRec: $input) {
    ...CashFragment
  }
}
    ${CashFragmentFragmentDoc}`;
export const DeleteCashDocument = `
    mutation deleteCash($input: Long!) {
  deleteCashRec(id: $input) {
    ...CashFragment
  }
}
    ${CashFragmentFragmentDoc}`;
export const GetCashByIdDocument = `
    query getCashById($id: Long!) {
  aCashRec(where: {id: {eq: $id}}) {
    items {
      ...CashFragment
    }
  }
}
    ${CashFragmentFragmentDoc}`;
export const GetCustomerDocument = `
    query getCustomer($take: Int, $skip: Int) {
  aCustomer(take: $take, skip: $skip) {
    totalCount
    items {
      ...CustomerFragment
    }
  }
}
    ${CustomerFragmentFragmentDoc}`;
export const CreatCustomerDocument = `
    mutation creatCustomer($input: CustomerInput) {
  addCustomer(customer: $input) {
    ...CustomerFragment
  }
}
    ${CustomerFragmentFragmentDoc}`;
export const UpdatCustomerDocument = `
    mutation updatCustomer($input: CustomerInput) {
  updateCustomer(customer: $input) {
    ...CustomerFragment
  }
}
    ${CustomerFragmentFragmentDoc}`;
export const DeleteCustomerDocument = `
    mutation deleteCustomer($input: Long!) {
  deleteCustomer(id: $input) {
    ...CustomerFragment
  }
}
    ${CustomerFragmentFragmentDoc}`;
export const GetCustomerByIdDocument = `
    query getCustomerById($id: Long!) {
  aCustomer(where: {id: {eq: $id}}) {
    items {
      ...CustomerFragment
    }
  }
}
    ${CustomerFragmentFragmentDoc}`;
export const GetEmployersDocument = `
    query getEmployers($take: Int, $skip: Int) {
  aEmployee(take: $take, skip: $skip) {
    totalCount
    items {
      ...EmployerFragment
    }
  }
}
    ${EmployerFragmentFragmentDoc}`;
export const CreatEmployerDocument = `
    mutation creatEmployer($input: EmployeeInput) {
  addEmployee(employee: $input) {
    ...EmployerFragment
  }
}
    ${EmployerFragmentFragmentDoc}`;
export const UpdatEmployerDocument = `
    mutation updatEmployer($input: EmployeeInput) {
  updateEmployee(employee: $input) {
    ...EmployerFragment
  }
}
    ${EmployerFragmentFragmentDoc}`;
export const DeleteEmployerDocument = `
    mutation deleteEmployer($input: Long!) {
  deleteEmployee(id: $input) {
    ...EmployerFragment
  }
}
    ${EmployerFragmentFragmentDoc}`;
export const GetEmployerByIdDocument = `
    query getEmployerById($id: Long!) {
  aEmployee(where: {id: {eq: $id}}) {
    items {
      ...EmployerFragment
    }
  }
}
    ${EmployerFragmentFragmentDoc}`;
export const GetProductDocument = `
    query getProduct($take: Int, $skip: Int) {
  aProduct(take: $take, skip: $skip) {
    totalCount
    items {
      ...ProductFragment
    }
  }
}
    ${ProductFragmentFragmentDoc}`;
export const CreatProductDocument = `
    mutation creatProduct($input: ProductInput) {
  addProduct(product: $input) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export const UpdatProductDocument = `
    mutation updatProduct($input: ProductInput) {
  updateProduct(product: $input) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export const DeleteProductDocument = `
    mutation deleteProduct($input: Long!) {
  deleteProduct(id: $input) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export const GetProductByIdDocument = `
    query getProductById($id: Long) {
  aProduct(where: {id: {eq: $id}}) {
    items {
      ...ProductFragment
    }
  }
}
    ${ProductFragmentFragmentDoc}`;
export const GetProductClassDocument = `
    query getProductClass($take: Int, $skip: Int) {
  aProdClass(take: $take, skip: $skip) {
    totalCount
    items {
      ...ProductClassFragment
    }
  }
}
    ${ProductClassFragmentFragmentDoc}`;
export const CreatProductClassDocument = `
    mutation creatProductClass($input: ProdClassInput) {
  addProdClass(prodClass: $input) {
    ...ProductClassFragment
  }
}
    ${ProductClassFragmentFragmentDoc}`;
export const UpdatProductClassDocument = `
    mutation updatProductClass($input: ProdClassInput) {
  updateProdClass(prodClass: $input) {
    ...ProductClassFragment
  }
}
    ${ProductClassFragmentFragmentDoc}`;
export const DeleteProductClassDocument = `
    mutation deleteProductClass($input: Long!) {
  deleteProdClass(id: $input) {
    ...ProductClassFragment
  }
}
    ${ProductClassFragmentFragmentDoc}`;
export const GetProductClassByIdDocument = `
    query getProductClassById($id: Int!) {
  aProdClass(where: {id: {eq: $id}}) {
    items {
      ...ProductClassFragment
    }
  }
}
    ${ProductClassFragmentFragmentDoc}`;
export const GetRecGoodDocument = `
    query getRecGood($take: Int, $skip: Int) {
  aRecGood(take: $take, skip: $skip) {
    totalCount
    items {
      ...RecGoodFragment
    }
  }
}
    ${RecGoodFragmentFragmentDoc}`;
export const CreatRecGoodDocument = `
    mutation creatRecGood($input: RecGoodInput) {
  addRecGood(recGood: $input) {
    ...RecGoodFragment
  }
}
    ${RecGoodFragmentFragmentDoc}`;
export const UpdateRecGoodDocument = `
    mutation updateRecGood($input: RecGoodInput) {
  updateRecGood(recGood: $input) {
    ...RecGoodFragment
  }
}
    ${RecGoodFragmentFragmentDoc}`;
export const DeleteRecGoodDocument = `
    mutation deleteRecGood($input: Long!) {
  deleteRecGood(id: $input) {
    ...RecGoodFragment
  }
}
    ${RecGoodFragmentFragmentDoc}`;
export const GetRecGoodByIdDocument = `
    query getRecGoodById($id: Long!) {
  aRecGood(where: {id: {eq: $id}}) {
    items {
      ...RecGoodFragment
    }
  }
}
    ${RecGoodFragmentFragmentDoc}`;
export const GetReceptDocument = `
    query getRecept($take: Int, $skip: Int) {
  aReceipt(take: $take, skip: $skip) {
    totalCount
    items {
      ...ReceptFragment
    }
  }
}
    ${ReceptFragmentFragmentDoc}`;
export const CreatReceptDocument = `
    mutation creatRecept($input: ReceiptInput) {
  addReceipt(receipt: $input) {
    ...ReceptFragment
  }
}
    ${ReceptFragmentFragmentDoc}`;
export const UpdatReceptDocument = `
    mutation updatRecept($input: ReceiptInput) {
  updateReceipt(receipt: $input) {
    ...ReceptFragment
  }
}
    ${ReceptFragmentFragmentDoc}`;
export const DeleteReceptDocument = `
    mutation deleteRecept($input: Long!) {
  deleteReceipt(id: $input) {
    ...ReceptFragment
  }
}
    ${ReceptFragmentFragmentDoc}`;
export const GetReceptByIdDocument = `
    query getReceptById($id: Long!) {
  aReceipt(where: {id: {eq: $id}}) {
    items {
      ...ReceptFragment
    }
  }
}
    ${ReceptFragmentFragmentDoc}`;
export const GetReturnCustomerDocument = `
    query getReturnCustomer($take: Int, $skip: Int) {
  aReturnCust(take: $take, skip: $skip) {
    totalCount
    items {
      ...ReturnCustomerFragment
    }
  }
}
    ${ReturnCustomerFragmentFragmentDoc}`;
export const CreatReturnCustDocument = `
    mutation creatReturnCust($input: ReturnCustInput) {
  addReturnCust(returnCust: $input) {
    ...ReturnCustomerFragment
  }
}
    ${ReturnCustomerFragmentFragmentDoc}`;
export const UpdatReturnCustDocument = `
    mutation updatReturnCust($input: ReturnCustInput) {
  updateReturnCust(returnCust: $input) {
    ...ReturnCustomerFragment
  }
}
    ${ReturnCustomerFragmentFragmentDoc}`;
export const DeleteReturnCustDocument = `
    mutation deleteReturnCust($input: Long!) {
  deleteReturnCust(id: $input) {
    ...ReturnCustomerFragment
  }
}
    ${ReturnCustomerFragmentFragmentDoc}`;
export const GetReturnCustomerByIdDocument = `
    query getReturnCustomerById($id: Long!) {
  aReturnCust(where: {id: {eq: $id}}) {
    items {
      ...ReturnCustomerFragment
    }
  }
}
    ${ReturnCustomerFragmentFragmentDoc}`;
export const GetSalesGoodDocument = `
    query getSalesGood($take: Int, $skip: Int) {
  aSalesGood(take: $take, skip: $skip) {
    totalCount
    items {
      ...SalesGoodFragment
    }
  }
}
    ${SalesGoodFragmentFragmentDoc}`;
export const CreatSalesGoodDocument = `
    mutation creatSalesGood($input: SalesGoodInput) {
  addDelivery(salesGood: $input) {
    ...SalesGoodFragment
  }
}
    ${SalesGoodFragmentFragmentDoc}`;
export const UpdateSalesGoodDocument = `
    mutation updateSalesGood($input: SalesGoodInput) {
  updateDelivery(salesGood: $input) {
    ...SalesGoodFragment
  }
}
    ${SalesGoodFragmentFragmentDoc}`;
export const DeleteSalesGoodDocument = `
    mutation deleteSalesGood($input: Long!) {
  deleteDelivery(id: $input) {
    ...SalesGoodFragment
  }
}
    ${SalesGoodFragmentFragmentDoc}`;
export const GetSalesGoodByIdDocument = `
    query getSalesGoodById($id: Long!) {
  aSalesGood(where: {id: {eq: $id}}) {
    items {
      ...SalesGoodFragment
    }
  }
}
    ${SalesGoodFragmentFragmentDoc}`;
export const GetStoreDocument = `
    query getStore($take: Int, $skip: Int) {
  aStore(take: $take, skip: $skip) {
    totalCount
    items {
      ...StoreFragment
    }
  }
}
    ${StoreFragmentFragmentDoc}`;
export const CreatStoreDocument = `
    mutation creatStore($input: StoreInput) {
  addStore(store: $input) {
    ...StoreFragment
  }
}
    ${StoreFragmentFragmentDoc}`;
export const UpdatStoreDocument = `
    mutation updatStore($input: StoreInput) {
  updateStore(store: $input) {
    ...StoreFragment
  }
}
    ${StoreFragmentFragmentDoc}`;
export const DeleteStoreDocument = `
    mutation deleteStore($input: Long!) {
  deleteStore(id: $input) {
    ...StoreFragment
  }
}
    ${StoreFragmentFragmentDoc}`;
export const GetStoreByIdDocument = `
    query getStoreById($id: Long!) {
  aStore(where: {id: {eq: $id}}) {
    items {
      ...StoreFragment
    }
  }
}
    ${StoreFragmentFragmentDoc}`;
export const GetSupplierDocument = `
    query getSupplier($take: Int, $skip: Int) {
  aSupplier(take: $take, skip: $skip) {
    totalCount
    items {
      ...SupplierFragment
    }
  }
}
    ${SupplierFragmentFragmentDoc}`;
export const CreatSupplierDocument = `
    mutation creatSupplier($input: SupplierInput) {
  addSupplier(supplier: $input) {
    ...SupplierFragment
  }
}
    ${SupplierFragmentFragmentDoc}`;
export const UpdatSupplierDocument = `
    mutation updatSupplier($input: SupplierInput) {
  updateSupplier(supplier: $input) {
    ...SupplierFragment
  }
}
    ${SupplierFragmentFragmentDoc}`;
export const DeleteSupplierDocument = `
    mutation deleteSupplier($input: Long!) {
  deleteSupplier(id: $input) {
    ...SupplierFragment
  }
}
    ${SupplierFragmentFragmentDoc}`;
export const GetSupplierByIdDocument = `
    query getSupplierById($id: Long!) {
  aSupplier(where: {id: {eq: $id}}) {
    items {
      ...SupplierFragment
    }
  }
}
    ${SupplierFragmentFragmentDoc}`;
export const GetRightDocument = `
    query getRight($take: Int, $skip: Int) {
  uright(take: $take, skip: $skip) {
    totalCount
    items {
      ...RightFragment
    }
  }
}
    ${RightFragmentFragmentDoc}`;
export const CreatRightDocument = `
    mutation creatRight($input: UrightInput) {
  addUright(uright: $input) {
    ...RightFragment
  }
}
    ${RightFragmentFragmentDoc}`;
export const UpdatRightDocument = `
    mutation updatRight($input: UrightInput) {
  updateUright(uright: $input) {
    ...RightFragment
  }
}
    ${RightFragmentFragmentDoc}`;
export const DeleteRightDocument = `
    mutation deleteRight($input: Long!) {
  deleteUright(id: $input) {
    ...RightFragment
  }
}
    ${RightFragmentFragmentDoc}`;
export const GetUrightByIdDocument = `
    query getUrightById($id: Int!) {
  uright(where: {id: {eq: $id}}) {
    items {
      ...RightFragment
    }
  }
}
    ${RightFragmentFragmentDoc}`;
export const GetWeaklyReapateDocument = `
    query getWeaklyReapate($take: Int, $skip: Int) {
  aWeeklyRepate(take: $take, skip: $skip) {
    totalCount
    items {
      ...WeaklyReapateFragment
    }
  }
}
    ${WeaklyReapateFragmentFragmentDoc}`;
export const CreatWeaklyReapateDocument = `
    mutation creatWeaklyReapate($input: WeeklyRepateInput) {
  addWeeklyRepate(weeklyRepate: $input) {
    ...WeaklyReapateFragment
  }
}
    ${WeaklyReapateFragmentFragmentDoc}`;
export const UpdatWeaklyReapateDocument = `
    mutation updatWeaklyReapate($input: WeeklyRepateInput) {
  updateWeeklyRepate(weeklyRepate: $input) {
    ...WeaklyReapateFragment
  }
}
    ${WeaklyReapateFragmentFragmentDoc}`;
export const DeleteWeaklyReapateDocument = `
    mutation deleteWeaklyReapate($input: Long!) {
  deleteWeeklyRepate(id: $input) {
    ...WeaklyReapateFragment
  }
}
    ${WeaklyReapateFragmentFragmentDoc}`;
export const GetWeaklyReapateByIdDocument = `
    query getWeaklyReapateById($id: Long!) {
  aWeeklyRepate(where: {id: {eq: $id}}) {
    items {
      ...WeaklyReapateFragment
    }
  }
}
    ${WeaklyReapateFragmentFragmentDoc}`;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReturnSupport: build.query<GetReturnSupportQuery, GetReturnSupportQueryVariables | void>({
      query: (variables) => ({ document: GetReturnSupportDocument, variables })
    }),
    creatReturnSupp: build.mutation<CreatReturnSuppMutation, CreatReturnSuppMutationVariables | void>({
      query: (variables) => ({ document: CreatReturnSuppDocument, variables })
    }),
    updatReturnSupp: build.mutation<UpdatReturnSuppMutation, UpdatReturnSuppMutationVariables | void>({
      query: (variables) => ({ document: UpdatReturnSuppDocument, variables })
    }),
    deleteReturnSupp: build.mutation<DeleteReturnSuppMutation, DeleteReturnSuppMutationVariables>({
      query: (variables) => ({ document: DeleteReturnSuppDocument, variables })
    }),
    getReturnSupportById: build.query<GetReturnSupportByIdQuery, GetReturnSupportByIdQueryVariables>({
      query: (variables) => ({ document: GetReturnSupportByIdDocument, variables })
    }),
    getClass: build.query<GetClassQuery, GetClassQueryVariables | void>({
      query: (variables) => ({ document: GetClassDocument, variables })
    }),
    creatAccClass: build.mutation<CreatAccClassMutation, CreatAccClassMutationVariables | void>({
      query: (variables) => ({ document: CreatAccClassDocument, variables })
    }),
    updatAccClass: build.mutation<UpdatAccClassMutation, UpdatAccClassMutationVariables | void>({
      query: (variables) => ({ document: UpdatAccClassDocument, variables })
    }),
    deleteAccClass: build.mutation<DeleteAccClassMutation, DeleteAccClassMutationVariables>({
      query: (variables) => ({ document: DeleteAccClassDocument, variables })
    }),
    getAccClassById: build.query<GetAccClassByIdQuery, GetAccClassByIdQueryVariables | void>({
      query: (variables) => ({ document: GetAccClassByIdDocument, variables })
    }),
    getAttendance: build.query<GetAttendanceQuery, GetAttendanceQueryVariables | void>({
      query: (variables) => ({ document: GetAttendanceDocument, variables })
    }),
    creatAttendance: build.mutation<CreatAttendanceMutation, CreatAttendanceMutationVariables | void>({
      query: (variables) => ({ document: CreatAttendanceDocument, variables })
    }),
    updatAttendance: build.mutation<UpdatAttendanceMutation, UpdatAttendanceMutationVariables | void>({
      query: (variables) => ({ document: UpdatAttendanceDocument, variables })
    }),
    deleteAttendance: build.mutation<DeleteAttendanceMutation, DeleteAttendanceMutationVariables>({
      query: (variables) => ({ document: DeleteAttendanceDocument, variables })
    }),
    getAttendanceById: build.query<GetAttendanceByIdQuery, GetAttendanceByIdQueryVariables | void>({
      query: (variables) => ({ document: GetAttendanceByIdDocument, variables })
    }),
    getBank: build.query<GetBankQuery, GetBankQueryVariables | void>({
      query: (variables) => ({ document: GetBankDocument, variables })
    }),
    creatBank: build.mutation<CreatBankMutation, CreatBankMutationVariables | void>({
      query: (variables) => ({ document: CreatBankDocument, variables })
    }),
    updatBank: build.mutation<UpdatBankMutation, UpdatBankMutationVariables | void>({
      query: (variables) => ({ document: UpdatBankDocument, variables })
    }),
    deleteBank: build.mutation<DeleteBankMutation, DeleteBankMutationVariables>({
      query: (variables) => ({ document: DeleteBankDocument, variables })
    }),
    getBankById: build.query<GetBankByIdQuery, GetBankByIdQueryVariables>({
      query: (variables) => ({ document: GetBankByIdDocument, variables })
    }),
    getCash: build.query<GetCashQuery, GetCashQueryVariables | void>({
      query: (variables) => ({ document: GetCashDocument, variables })
    }),
    updateCash: build.mutation<UpdateCashMutation, UpdateCashMutationVariables | void>({
      query: (variables) => ({ document: UpdateCashDocument, variables })
    }),
    createCash: build.mutation<CreateCashMutation, CreateCashMutationVariables | void>({
      query: (variables) => ({ document: CreateCashDocument, variables })
    }),
    deleteCash: build.mutation<DeleteCashMutation, DeleteCashMutationVariables>({
      query: (variables) => ({ document: DeleteCashDocument, variables })
    }),
    getCashById: build.query<GetCashByIdQuery, GetCashByIdQueryVariables>({
      query: (variables) => ({ document: GetCashByIdDocument, variables })
    }),
    getCustomer: build.query<GetCustomerQuery, GetCustomerQueryVariables | void>({
      query: (variables) => ({ document: GetCustomerDocument, variables })
    }),
    creatCustomer: build.mutation<CreatCustomerMutation, CreatCustomerMutationVariables | void>({
      query: (variables) => ({ document: CreatCustomerDocument, variables })
    }),
    updatCustomer: build.mutation<UpdatCustomerMutation, UpdatCustomerMutationVariables | void>({
      query: (variables) => ({ document: UpdatCustomerDocument, variables })
    }),
    deleteCustomer: build.mutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>({
      query: (variables) => ({ document: DeleteCustomerDocument, variables })
    }),
    getCustomerById: build.query<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>({
      query: (variables) => ({ document: GetCustomerByIdDocument, variables })
    }),
    getEmployers: build.query<GetEmployersQuery, GetEmployersQueryVariables | void>({
      query: (variables) => ({ document: GetEmployersDocument, variables })
    }),
    creatEmployer: build.mutation<CreatEmployerMutation, CreatEmployerMutationVariables | void>({
      query: (variables) => ({ document: CreatEmployerDocument, variables })
    }),
    updatEmployer: build.mutation<UpdatEmployerMutation, UpdatEmployerMutationVariables | void>({
      query: (variables) => ({ document: UpdatEmployerDocument, variables })
    }),
    deleteEmployer: build.mutation<DeleteEmployerMutation, DeleteEmployerMutationVariables>({
      query: (variables) => ({ document: DeleteEmployerDocument, variables })
    }),
    getEmployerById: build.query<GetEmployerByIdQuery, GetEmployerByIdQueryVariables>({
      query: (variables) => ({ document: GetEmployerByIdDocument, variables })
    }),
    getProduct: build.query<GetProductQuery, GetProductQueryVariables | void>({
      query: (variables) => ({ document: GetProductDocument, variables })
    }),
    creatProduct: build.mutation<CreatProductMutation, CreatProductMutationVariables | void>({
      query: (variables) => ({ document: CreatProductDocument, variables })
    }),
    updatProduct: build.mutation<UpdatProductMutation, UpdatProductMutationVariables | void>({
      query: (variables) => ({ document: UpdatProductDocument, variables })
    }),
    deleteProduct: build.mutation<DeleteProductMutation, DeleteProductMutationVariables>({
      query: (variables) => ({ document: DeleteProductDocument, variables })
    }),
    getProductById: build.query<GetProductByIdQuery, GetProductByIdQueryVariables | void>({
      query: (variables) => ({ document: GetProductByIdDocument, variables })
    }),
    getProductClass: build.query<GetProductClassQuery, GetProductClassQueryVariables | void>({
      query: (variables) => ({ document: GetProductClassDocument, variables })
    }),
    creatProductClass: build.mutation<CreatProductClassMutation, CreatProductClassMutationVariables | void>({
      query: (variables) => ({ document: CreatProductClassDocument, variables })
    }),
    updatProductClass: build.mutation<UpdatProductClassMutation, UpdatProductClassMutationVariables | void>({
      query: (variables) => ({ document: UpdatProductClassDocument, variables })
    }),
    deleteProductClass: build.mutation<DeleteProductClassMutation, DeleteProductClassMutationVariables>({
      query: (variables) => ({ document: DeleteProductClassDocument, variables })
    }),
    getProductClassById: build.query<GetProductClassByIdQuery, GetProductClassByIdQueryVariables>({
      query: (variables) => ({ document: GetProductClassByIdDocument, variables })
    }),
    getRecGood: build.query<GetRecGoodQuery, GetRecGoodQueryVariables | void>({
      query: (variables) => ({ document: GetRecGoodDocument, variables })
    }),
    creatRecGood: build.mutation<CreatRecGoodMutation, CreatRecGoodMutationVariables | void>({
      query: (variables) => ({ document: CreatRecGoodDocument, variables })
    }),
    updateRecGood: build.mutation<UpdateRecGoodMutation, UpdateRecGoodMutationVariables | void>({
      query: (variables) => ({ document: UpdateRecGoodDocument, variables })
    }),
    deleteRecGood: build.mutation<DeleteRecGoodMutation, DeleteRecGoodMutationVariables>({
      query: (variables) => ({ document: DeleteRecGoodDocument, variables })
    }),
    getRecGoodById: build.query<GetRecGoodByIdQuery, GetRecGoodByIdQueryVariables>({
      query: (variables) => ({ document: GetRecGoodByIdDocument, variables })
    }),
    getRecept: build.query<GetReceptQuery, GetReceptQueryVariables | void>({
      query: (variables) => ({ document: GetReceptDocument, variables })
    }),
    creatRecept: build.mutation<CreatReceptMutation, CreatReceptMutationVariables | void>({
      query: (variables) => ({ document: CreatReceptDocument, variables })
    }),
    updatRecept: build.mutation<UpdatReceptMutation, UpdatReceptMutationVariables | void>({
      query: (variables) => ({ document: UpdatReceptDocument, variables })
    }),
    deleteRecept: build.mutation<DeleteReceptMutation, DeleteReceptMutationVariables>({
      query: (variables) => ({ document: DeleteReceptDocument, variables })
    }),
    getReceptById: build.query<GetReceptByIdQuery, GetReceptByIdQueryVariables>({
      query: (variables) => ({ document: GetReceptByIdDocument, variables })
    }),
    getReturnCustomer: build.query<GetReturnCustomerQuery, GetReturnCustomerQueryVariables | void>({
      query: (variables) => ({ document: GetReturnCustomerDocument, variables })
    }),
    creatReturnCust: build.mutation<CreatReturnCustMutation, CreatReturnCustMutationVariables | void>({
      query: (variables) => ({ document: CreatReturnCustDocument, variables })
    }),
    updatReturnCust: build.mutation<UpdatReturnCustMutation, UpdatReturnCustMutationVariables | void>({
      query: (variables) => ({ document: UpdatReturnCustDocument, variables })
    }),
    deleteReturnCust: build.mutation<DeleteReturnCustMutation, DeleteReturnCustMutationVariables>({
      query: (variables) => ({ document: DeleteReturnCustDocument, variables })
    }),
    getReturnCustomerById: build.query<GetReturnCustomerByIdQuery, GetReturnCustomerByIdQueryVariables>({
      query: (variables) => ({ document: GetReturnCustomerByIdDocument, variables })
    }),
    getSalesGood: build.query<GetSalesGoodQuery, GetSalesGoodQueryVariables | void>({
      query: (variables) => ({ document: GetSalesGoodDocument, variables })
    }),
    creatSalesGood: build.mutation<CreatSalesGoodMutation, CreatSalesGoodMutationVariables | void>({
      query: (variables) => ({ document: CreatSalesGoodDocument, variables })
    }),
    updateSalesGood: build.mutation<UpdateSalesGoodMutation, UpdateSalesGoodMutationVariables | void>({
      query: (variables) => ({ document: UpdateSalesGoodDocument, variables })
    }),
    deleteSalesGood: build.mutation<DeleteSalesGoodMutation, DeleteSalesGoodMutationVariables>({
      query: (variables) => ({ document: DeleteSalesGoodDocument, variables })
    }),
    getSalesGoodById: build.query<GetSalesGoodByIdQuery, GetSalesGoodByIdQueryVariables>({
      query: (variables) => ({ document: GetSalesGoodByIdDocument, variables })
    }),
    getStore: build.query<GetStoreQuery, GetStoreQueryVariables | void>({
      query: (variables) => ({ document: GetStoreDocument, variables })
    }),
    creatStore: build.mutation<CreatStoreMutation, CreatStoreMutationVariables | void>({
      query: (variables) => ({ document: CreatStoreDocument, variables })
    }),
    updatStore: build.mutation<UpdatStoreMutation, UpdatStoreMutationVariables | void>({
      query: (variables) => ({ document: UpdatStoreDocument, variables })
    }),
    deleteStore: build.mutation<DeleteStoreMutation, DeleteStoreMutationVariables>({
      query: (variables) => ({ document: DeleteStoreDocument, variables })
    }),
    getStoreById: build.query<GetStoreByIdQuery, GetStoreByIdQueryVariables>({
      query: (variables) => ({ document: GetStoreByIdDocument, variables })
    }),
    getSupplier: build.query<GetSupplierQuery, GetSupplierQueryVariables | void>({
      query: (variables) => ({ document: GetSupplierDocument, variables })
    }),
    creatSupplier: build.mutation<CreatSupplierMutation, CreatSupplierMutationVariables | void>({
      query: (variables) => ({ document: CreatSupplierDocument, variables })
    }),
    updatSupplier: build.mutation<UpdatSupplierMutation, UpdatSupplierMutationVariables | void>({
      query: (variables) => ({ document: UpdatSupplierDocument, variables })
    }),
    deleteSupplier: build.mutation<DeleteSupplierMutation, DeleteSupplierMutationVariables>({
      query: (variables) => ({ document: DeleteSupplierDocument, variables })
    }),
    getSupplierById: build.query<GetSupplierByIdQuery, GetSupplierByIdQueryVariables>({
      query: (variables) => ({ document: GetSupplierByIdDocument, variables })
    }),
    getRight: build.query<GetRightQuery, GetRightQueryVariables | void>({
      query: (variables) => ({ document: GetRightDocument, variables })
    }),
    creatRight: build.mutation<CreatRightMutation, CreatRightMutationVariables | void>({
      query: (variables) => ({ document: CreatRightDocument, variables })
    }),
    updatRight: build.mutation<UpdatRightMutation, UpdatRightMutationVariables | void>({
      query: (variables) => ({ document: UpdatRightDocument, variables })
    }),
    deleteRight: build.mutation<DeleteRightMutation, DeleteRightMutationVariables>({
      query: (variables) => ({ document: DeleteRightDocument, variables })
    }),
    getUrightById: build.query<GetUrightByIdQuery, GetUrightByIdQueryVariables>({
      query: (variables) => ({ document: GetUrightByIdDocument, variables })
    }),
    getWeaklyReapate: build.query<GetWeaklyReapateQuery, GetWeaklyReapateQueryVariables | void>({
      query: (variables) => ({ document: GetWeaklyReapateDocument, variables })
    }),
    creatWeaklyReapate: build.mutation<CreatWeaklyReapateMutation, CreatWeaklyReapateMutationVariables | void>({
      query: (variables) => ({ document: CreatWeaklyReapateDocument, variables })
    }),
    updatWeaklyReapate: build.mutation<UpdatWeaklyReapateMutation, UpdatWeaklyReapateMutationVariables | void>({
      query: (variables) => ({ document: UpdatWeaklyReapateDocument, variables })
    }),
    deleteWeaklyReapate: build.mutation<DeleteWeaklyReapateMutation, DeleteWeaklyReapateMutationVariables>({
      query: (variables) => ({ document: DeleteWeaklyReapateDocument, variables })
    }),
    getWeaklyReapateById: build.query<GetWeaklyReapateByIdQuery, GetWeaklyReapateByIdQueryVariables>({
      query: (variables) => ({ document: GetWeaklyReapateByIdDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetReturnSupportQuery, useLazyGetReturnSupportQuery, useCreatReturnSuppMutation, useUpdatReturnSuppMutation, useDeleteReturnSuppMutation, useGetReturnSupportByIdQuery, useLazyGetReturnSupportByIdQuery, useGetClassQuery, useLazyGetClassQuery, useCreatAccClassMutation, useUpdatAccClassMutation, useDeleteAccClassMutation, useGetAccClassByIdQuery, useLazyGetAccClassByIdQuery, useGetAttendanceQuery, useLazyGetAttendanceQuery, useCreatAttendanceMutation, useUpdatAttendanceMutation, useDeleteAttendanceMutation, useGetAttendanceByIdQuery, useLazyGetAttendanceByIdQuery, useGetBankQuery, useLazyGetBankQuery, useCreatBankMutation, useUpdatBankMutation, useDeleteBankMutation, useGetBankByIdQuery, useLazyGetBankByIdQuery, useGetCashQuery, useLazyGetCashQuery, useUpdateCashMutation, useCreateCashMutation, useDeleteCashMutation, useGetCashByIdQuery, useLazyGetCashByIdQuery, useGetCustomerQuery, useLazyGetCustomerQuery, useCreatCustomerMutation, useUpdatCustomerMutation, useDeleteCustomerMutation, useGetCustomerByIdQuery, useLazyGetCustomerByIdQuery, useGetEmployersQuery, useLazyGetEmployersQuery, useCreatEmployerMutation, useUpdatEmployerMutation, useDeleteEmployerMutation, useGetEmployerByIdQuery, useLazyGetEmployerByIdQuery, useGetProductQuery, useLazyGetProductQuery, useCreatProductMutation, useUpdatProductMutation, useDeleteProductMutation, useGetProductByIdQuery, useLazyGetProductByIdQuery, useGetProductClassQuery, useLazyGetProductClassQuery, useCreatProductClassMutation, useUpdatProductClassMutation, useDeleteProductClassMutation, useGetProductClassByIdQuery, useLazyGetProductClassByIdQuery, useGetRecGoodQuery, useLazyGetRecGoodQuery, useCreatRecGoodMutation, useUpdateRecGoodMutation, useDeleteRecGoodMutation, useGetRecGoodByIdQuery, useLazyGetRecGoodByIdQuery, useGetReceptQuery, useLazyGetReceptQuery, useCreatReceptMutation, useUpdatReceptMutation, useDeleteReceptMutation, useGetReceptByIdQuery, useLazyGetReceptByIdQuery, useGetReturnCustomerQuery, useLazyGetReturnCustomerQuery, useCreatReturnCustMutation, useUpdatReturnCustMutation, useDeleteReturnCustMutation, useGetReturnCustomerByIdQuery, useLazyGetReturnCustomerByIdQuery, useGetSalesGoodQuery, useLazyGetSalesGoodQuery, useCreatSalesGoodMutation, useUpdateSalesGoodMutation, useDeleteSalesGoodMutation, useGetSalesGoodByIdQuery, useLazyGetSalesGoodByIdQuery, useGetStoreQuery, useLazyGetStoreQuery, useCreatStoreMutation, useUpdatStoreMutation, useDeleteStoreMutation, useGetStoreByIdQuery, useLazyGetStoreByIdQuery, useGetSupplierQuery, useLazyGetSupplierQuery, useCreatSupplierMutation, useUpdatSupplierMutation, useDeleteSupplierMutation, useGetSupplierByIdQuery, useLazyGetSupplierByIdQuery, useGetRightQuery, useLazyGetRightQuery, useCreatRightMutation, useUpdatRightMutation, useDeleteRightMutation, useGetUrightByIdQuery, useLazyGetUrightByIdQuery, useGetWeaklyReapateQuery, useLazyGetWeaklyReapateQuery, useCreatWeaklyReapateMutation, useUpdatWeaklyReapateMutation, useDeleteWeaklyReapateMutation, useGetWeaklyReapateByIdQuery, useLazyGetWeaklyReapateByIdQuery } = injectedRtkApi;

