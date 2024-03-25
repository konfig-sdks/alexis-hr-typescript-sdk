<div align="left">

[![Visit Alexishr](./header.png)](https://alexishr.com)

# [Alexishr](https://alexishr.com)<a id="alexishr"></a>

<h1 id="introduction">Introduction</h1>
<p>
  AlexisHR API is currently in preview. This means that small, backward
  incompatible changes might be introduced while in preview. The changes will be
  documented and communicated.
  <a
    href="https://cdn.forms-content.sg-form.com/56c6a65c-90a2-11eb-a700-a6de1aea3a1a"
    target="_blank"
    ><button>Subscribe to updates</button></a
  >
</p>

<h1 id="authentication">Authentication</h1>
<pre class="click-to-expand-wrapper is-snippet-wrapper language-undefined">
<code class="is-highlighted language-bash">curl https://api.alexishr.com/v1/employee \
  -H "Authorization: Bearer &lt;your_access_token&gt;"</code>
</pre>
<p>
  Authenticate your account when using the API by including your secret Access
  Token in the request.
  <a href="https://app.alexishr.com/access-tokens">Manage your Access Tokens</a
  >.
</p>
<p>
  Authentication is performed by passing the Access Token in the Authorization
  header.
</p>
<hr />

<h1 id="structure">Structure</h1>
<p>
  You will find the structure of the API to be highly uniform and consistent.
  Typically every resource can be accessed via a top level endpoint, such as
  <code>/v1/employee</code>. For every such resource, you can perform some of
  the following operations:
</p>
<h2>Operations</h2>
<table>
  <tr>
    <td>GET /v1/:resource</td>
    <td>List all objects of this type</td>
  </tr>
  <tr>
    <td>GET /v1/:resource/:id</td>
    <td>Retrieve a resource by id</td>
  </tr>
  <tr>
    <td>POST /v1/:resource</td>
    <td>Create a resource of this type</td>
  </tr>
  <tr>
    <td>PATCH /v1/:resource/:id</td>
    <td>Update the resource by id</td>
  </tr>
  <tr>
    <td>DELETE /v1/:resource/:id</td>
    <td>Delete the resource by id</td>
  </tr>
</table>
<hr />

<h1 id="roles">Roles</h1>
<p>The Access Tokens will have owner permission on the account</p>
<hr />

<h1 id="filters">Filters</h1>
<p>
  Some of the list endpoints allow to filter results by certain conditions.
  Refer to specific resources to find out what criteria are allowed. Below is a
  list of the different conditions.
</p>

<h4 id="eq"><code>$eq</code></h4>
<p>Find all results matching the attribute value specified.</p>
<div>
  <pre><code class="language-shell" data-lang="shell">GET /v1/example?filters[fieldName][$eq]=value</code></pre>
</div>
<p>Can also be simplified like this.</p>
<div>
  <pre><code class="language-shell" data-lang="shell">GET /v1/example?filters[fieldName]=value</code></pre>
</div>

<h4 id="neq"><code>$neq</code></h4>
<p>Find all results not matching the attribute value specified.</p>
<div>
  <pre><code class="language-shell" data-lang="shell">GET /v1/example?filters[fieldName][$neq]=value</code></pre>
</div>

<h4 id="gt"><code>$gt</code>, <code>$gte</code></h4>
<p>
  Find all results where the value is more (<code>$gt</code>) or more and equal
  (<code>$gte</code>) to a given value.
</p>
<div>
  <pre><code class="language-shell" data-lang="shell">GET /v1/example?filters[startDate][$gte]=2020-01-01</code></pre>
</div>
<hr />

<h4 id="lt"><code>$lt</code>, <code>$lte</code></h4>
<p>
  Find all results where the value is less (<code>$lt</code>) or less and equal
  (<code>$lte</code>) to a given value.
</p>
<div>
  <pre><code class="language-shell" data-lang="shell">GET /v1/example?filters[startDate][$lte]=2020-01-01</code></pre>
</div>
<hr />

<h4 id="in"><code>$in</code>, <code>$nin</code></h4>
<p>
  Find all results matching (<code>$in</code>) or not matching
  (<code>$nin</code>) any of the attribute values specified.
</p>
<div>
  <pre><code class="language-shell" data-lang="shell">GET /v1/example?filters[fieldName][$in][]=value1&filters[fieldName][$in][]=value2</code></pre>
</div>
<hr />

<h4 id="between"><code>$between</code></h4>
<p>Find all results between two values specified.</p>
<div>
  <pre><code class="language-shell" data-lang="shell">GET /v1/example?filters[startDate][$between][]=2020-01-01&filters[startDate][$between][]=2020-12-31</code></pre>
</div>
<hr />

<h1 id="versioning">Versioning</h1>
<p>
  Each version of the API is guaranteed to be compatible with the resources of
  the same version. When we make breaking changes to the API a new version will
  be published
</p>
<hr />

<h1 id="changelog">Changelog</h1>
<h3>2023-12-20</h3>
<p>Field [updated] added for filter & select for Get Many Employments and Get Many Employees.</p>
<h3>2021-03-15</h3>
<p>First draft was published</p>
<hr />

# Authentication<a id="authentication"></a>

<!-- ReDoc-Inject: <security-definitions> -->

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`alexishr.child.createOne`](#alexishrchildcreateone)
  * [`alexishr.child.deleteChild`](#alexishrchilddeletechild)
  * [`alexishr.child.getMany`](#alexishrchildgetmany)
  * [`alexishr.child.getOneChild`](#alexishrchildgetonechild)
  * [`alexishr.child.replaceChildData`](#alexishrchildreplacechilddata)
  * [`alexishr.child.updateChildData`](#alexishrchildupdatechilddata)
  * [`alexishr.company.getOne`](#alexishrcompanygetone)
  * [`alexishr.company.listManyCompanies`](#alexishrcompanylistmanycompanies)
  * [`alexishr.compensation.createOneCompensation`](#alexishrcompensationcreateonecompensation)
  * [`alexishr.compensation.deleteOne`](#alexishrcompensationdeleteone)
  * [`alexishr.compensation.getManyCompensations`](#alexishrcompensationgetmanycompensations)
  * [`alexishr.compensation.getOne`](#alexishrcompensationgetone)
  * [`alexishr.compensation.replaceOneCompensation`](#alexishrcompensationreplaceonecompensation)
  * [`alexishr.compensation.updateOne`](#alexishrcompensationupdateone)
  * [`alexishr.costCenter.createOneCostCenter`](#alexishrcostcentercreateonecostcenter)
  * [`alexishr.costCenter.deleteOneCostCenter`](#alexishrcostcenterdeleteonecostcenter)
  * [`alexishr.costCenter.getMany`](#alexishrcostcentergetmany)
  * [`alexishr.costCenter.getOneCostCenter`](#alexishrcostcentergetonecostcenter)
  * [`alexishr.costCenter.replaceOneCostCenter`](#alexishrcostcenterreplaceonecostcenter)
  * [`alexishr.costCenter.updateOneCostCenter`](#alexishrcostcenterupdateonecostcenter)
  * [`alexishr.department.createOne`](#alexishrdepartmentcreateone)
  * [`alexishr.department.deleteOneDepartment`](#alexishrdepartmentdeleteonedepartment)
  * [`alexishr.department.getOne`](#alexishrdepartmentgetone)
  * [`alexishr.department.listManyDepartments`](#alexishrdepartmentlistmanydepartments)
  * [`alexishr.department.replaceOne`](#alexishrdepartmentreplaceone)
  * [`alexishr.department.updateOneDepartment`](#alexishrdepartmentupdateonedepartment)
  * [`alexishr.employee.createOneEmployee`](#alexishremployeecreateoneemployee)
  * [`alexishr.employee.getOne`](#alexishremployeegetone)
  * [`alexishr.employee.listManyEmployees`](#alexishremployeelistmanyemployees)
  * [`alexishr.employee.removeEmployee`](#alexishremployeeremoveemployee)
  * [`alexishr.employee.replaceOneEmployee`](#alexishremployeereplaceoneemployee)
  * [`alexishr.employee.updateOne`](#alexishremployeeupdateone)
  * [`alexishr.employeeTeamReference.createOneEmployeeTeamReference`](#alexishremployeeteamreferencecreateoneemployeeteamreference)
  * [`alexishr.employeeTeamReference.deleteOne`](#alexishremployeeteamreferencedeleteone)
  * [`alexishr.employeeTeamReference.getMany`](#alexishremployeeteamreferencegetmany)
  * [`alexishr.employeeTeamReference.getOneEmployeeTeamReference`](#alexishremployeeteamreferencegetoneemployeeteamreference)
  * [`alexishr.employeeTeamReference.replaceOne`](#alexishremployeeteamreferencereplaceone)
  * [`alexishr.employeeTeamReference.updateOneEmployeeTeamReference`](#alexishremployeeteamreferenceupdateoneemployeeteamreference)
  * [`alexishr.employment.createOneEmployment`](#alexishremploymentcreateoneemployment)
  * [`alexishr.employment.getOne`](#alexishremploymentgetone)
  * [`alexishr.employment.listManyEmployments`](#alexishremploymentlistmanyemployments)
  * [`alexishr.employment.removeOne`](#alexishremploymentremoveone)
  * [`alexishr.employment.replaceOne`](#alexishremploymentreplaceone)
  * [`alexishr.employment.updateEmploymentData`](#alexishremploymentupdateemploymentdata)
  * [`alexishr.employmentType.createOneEmploymentType`](#alexishremploymenttypecreateoneemploymenttype)
  * [`alexishr.employmentType.deleteOneType`](#alexishremploymenttypedeleteonetype)
  * [`alexishr.employmentType.getManyEmploymentTypes`](#alexishremploymenttypegetmanyemploymenttypes)
  * [`alexishr.employmentType.getOne`](#alexishremploymenttypegetone)
  * [`alexishr.employmentType.updateOneEmploymentType`](#alexishremploymenttypeupdateoneemploymenttype)
  * [`alexishr.employmentType.updateOneEmploymentType_0`](#alexishremploymenttypeupdateoneemploymenttype_0)
  * [`alexishr.leave.createOne`](#alexishrleavecreateone)
  * [`alexishr.leave.deleteOneLeave`](#alexishrleavedeleteoneleave)
  * [`alexishr.leave.getManyLeaves`](#alexishrleavegetmanyleaves)
  * [`alexishr.leave.getOneLeave`](#alexishrleavegetoneleave)
  * [`alexishr.leave.replaceOne`](#alexishrleavereplaceone)
  * [`alexishr.leave.updateOneLeave`](#alexishrleaveupdateoneleave)
  * [`alexishr.leaveTransaction.getOneLeaveTransaction`](#alexishrleavetransactiongetoneleavetransaction)
  * [`alexishr.leaveTransaction.listManyTransactions`](#alexishrleavetransactionlistmanytransactions)
  * [`alexishr.leaveType.createOneLeaveType`](#alexishrleavetypecreateoneleavetype)
  * [`alexishr.leaveType.deleteOneLeaveType`](#alexishrleavetypedeleteoneleavetype)
  * [`alexishr.leaveType.getManyLeaveTypes`](#alexishrleavetypegetmanyleavetypes)
  * [`alexishr.leaveType.getOneLeaveType`](#alexishrleavetypegetoneleavetype)
  * [`alexishr.leaveType.replaceLeaveType`](#alexishrleavetypereplaceleavetype)
  * [`alexishr.leaveType.updateOneLeaveType`](#alexishrleavetypeupdateoneleavetype)
  * [`alexishr.office.createOneOffice`](#alexishrofficecreateoneoffice)
  * [`alexishr.office.deleteOne`](#alexishrofficedeleteone)
  * [`alexishr.office.getOneOffice`](#alexishrofficegetoneoffice)
  * [`alexishr.office.listManyOffices`](#alexishrofficelistmanyoffices)
  * [`alexishr.office.replaceOne`](#alexishrofficereplaceone)
  * [`alexishr.office.updateOne`](#alexishrofficeupdateone)
  * [`alexishr.team.createOneTeam`](#alexishrteamcreateoneteam)
  * [`alexishr.team.deleteOne`](#alexishrteamdeleteone)
  * [`alexishr.team.getOneTeam`](#alexishrteamgetoneteam)
  * [`alexishr.team.listTeams`](#alexishrteamlistteams)
  * [`alexishr.team.replaceTeam`](#alexishrteamreplaceteam)
  * [`alexishr.team.updateTeam`](#alexishrteamupdateteam)
  * [`alexishr.timesheet.get`](#alexishrtimesheetget)
  * [`alexishr.timesheet.getMany`](#alexishrtimesheetgetmany)
  * [`alexishr.timesheetEntry.createOneEntry`](#alexishrtimesheetentrycreateoneentry)
  * [`alexishr.timesheetEntry.deleteOneEntry`](#alexishrtimesheetentrydeleteoneentry)
  * [`alexishr.timesheetEntry.getOneEntry`](#alexishrtimesheetentrygetoneentry)
  * [`alexishr.timesheetEntry.listManyEntries`](#alexishrtimesheetentrylistmanyentries)
  * [`alexishr.timesheetEntry.updateOneEntry`](#alexishrtimesheetentryupdateoneentry)
  * [`alexishr.timesheetEntry.updateOneEntry_0`](#alexishrtimesheetentryupdateoneentry_0)
  * [`alexishr.timesheetEntryType.getOneTimesheetEntryType`](#alexishrtimesheetentrytypegetonetimesheetentrytype)
  * [`alexishr.timesheetEntryType.listManyTimesheetEntryTypes`](#alexishrtimesheetentrytypelistmanytimesheetentrytypes)
  * [`alexishr.workWeek.createOneWorkweek`](#alexishrworkweekcreateoneworkweek)
  * [`alexishr.workWeek.deleteOne`](#alexishrworkweekdeleteone)
  * [`alexishr.workWeek.getMany`](#alexishrworkweekgetmany)
  * [`alexishr.workWeek.getOne`](#alexishrworkweekgetone)
  * [`alexishr.workWeek.replaceOne`](#alexishrworkweekreplaceone)
  * [`alexishr.workWeek.updateOne`](#alexishrworkweekupdateone)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=AlexisHR&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { AlexisHr } from "alexis-hr-typescript-sdk";

const alexishr = new AlexisHr({
  // Defining the base path is optional and defaults to https://api.alexishr.com/v1
  // basePath: "https://api.alexishr.com/v1",
  accessToken: "ACCESS_TOKEN",
});

const createOneResponse = await alexishr.child.createOne({
  employeeId: "507f1f77bcf86cd799439011",
  name: "name_example",
  birthdate: "1970-01-01T00:00:00.00Z",
});

console.log(createOneResponse);
```

## Reference<a id="reference"></a>


### `alexishr.child.createOne`<a id="alexishrchildcreateone"></a>

Create One Child

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneResponse = await alexishr.child.createOne({
  employeeId: "507f1f77bcf86cd799439011",
  name: "name_example",
  birthdate: "1970-01-01T00:00:00.00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### name: `string`<a id="name-string"></a>

##### birthdate: `string`<a id="birthdate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ChildResponseMapped](./models/child-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/child` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.child.deleteChild`<a id="alexishrchilddeletechild"></a>

Delete One Child

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteChildResponse = await alexishr.child.deleteChild({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/child/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.child.getMany`<a id="alexishrchildgetmany"></a>

Get Many Children

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyResponse = await alexishr.child.getMany({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Child fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### filters: [`ChildGetManyFiltersParameter`](./models/child-get-many-filters-parameter.ts)<a id="filters-childgetmanyfiltersparametermodelschild-get-many-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Children. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Children. (e.g. `offset=20`)

##### sort: [`ChildGetManySortParameter`](./models/child-get-many-sort-parameter.ts)<a id="sort-childgetmanysortparametermodelschild-get-many-sort-parameterts"></a>

Sort received Children by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[ChildrenGetManyResponseMapped](./models/children-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/child` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.child.getOneChild`<a id="alexishrchildgetonechild"></a>

Get One Child

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneChildResponse = await alexishr.child.getOneChild({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Child fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

#### 🔄 Return<a id="🔄-return"></a>

[ChildGetOneResponseMapped](./models/child-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/child/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.child.replaceChildData`<a id="alexishrchildreplacechilddata"></a>

Replace One Child

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceChildDataResponse = await alexishr.child.replaceChildData({
  id: "id_example",
  name: "name_example",
  birthdate: "1970-01-01T00:00:00.00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### birthdate: `string`<a id="birthdate-string"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[ChildResponseMapped](./models/child-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/child/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.child.updateChildData`<a id="alexishrchildupdatechilddata"></a>

Update One Child

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateChildDataResponse = await alexishr.child.updateChildData({
  id: "id_example",
  name: "name_example",
  birthdate: "1970-01-01T00:00:00.00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### birthdate: `string`<a id="birthdate-string"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[ChildResponseMapped](./models/child-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/child/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.company.getOne`<a id="alexishrcompanygetone"></a>

Get One Company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneResponse = await alexishr.company.getOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Company fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

#### 🔄 Return<a id="🔄-return"></a>

[CompanyGetOneResponseMapped](./models/company-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.company.listManyCompanies`<a id="alexishrcompanylistmanycompanies"></a>

Get Many Companies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManyCompaniesResponse = await alexishr.company.listManyCompanies({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Company fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### filters: [`CompanyListManyCompaniesFiltersParameter`](./models/company-list-many-companies-filters-parameter.ts)<a id="filters-companylistmanycompaniesfiltersparametermodelscompany-list-many-companies-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Companies. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Companies. (e.g. `offset=20`)

##### sort: [`CompanyListManyCompaniesSortParameter`](./models/company-list-many-companies-sort-parameter.ts)<a id="sort-companylistmanycompaniessortparametermodelscompany-list-many-companies-sort-parameterts"></a>

Sort received Companies by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesGetManyResponseMapped](./models/companies-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.compensation.createOneCompensation`<a id="alexishrcompensationcreateonecompensation"></a>

Create One Compensation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneCompensationResponse =
  await alexishr.compensation.createOneCompensation({
    employeeId: "507f1f77bcf86cd799439011",
    userId: "507f1f77bcf86cd799439011",
    amount: 3.14,
    effectiveDate: "effectiveDate_example",
    currency: "SEK",
    payoutDay: 25,
    payoutPeriod: "MONTHLY",
    payoutFrequency: "MONTH",
    salarySchedule: "ADVANCE",
    paidOvertime: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### amount: `number`<a id="amount-number"></a>

##### effectiveDate: `string`<a id="effectivedate-string"></a>

##### currency: `string`<a id="currency-string"></a>

##### payoutDay: `number`<a id="payoutday-number"></a>

##### payoutPeriod: `string`<a id="payoutperiod-string"></a>

##### payoutFrequency: `string`<a id="payoutfrequency-string"></a>

##### paidOvertime: `boolean`<a id="paidovertime-boolean"></a>

##### companyId: `string`<a id="companyid-string"></a>

##### salarySchedule: `string`<a id="salaryschedule-string"></a>

##### note: `string`<a id="note-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CompensationResponseMapped](./models/compensation-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.compensation.deleteOne`<a id="alexishrcompensationdeleteone"></a>

Delete One Compensation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneResponse = await alexishr.compensation.deleteOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.compensation.getManyCompensations`<a id="alexishrcompensationgetmanycompensations"></a>

Get Many Compensations

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyCompensationsResponse =
  await alexishr.compensation.getManyCompensations({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Compensation fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### filters: [`CompensationGetManyCompensationsFiltersParameter`](./models/compensation-get-many-compensations-filters-parameter.ts)<a id="filters-compensationgetmanycompensationsfiltersparametermodelscompensation-get-many-compensations-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Compensations. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Compensations. (e.g. `offset=20`)

##### sort: [`CompensationGetManyCompensationsSortParameter`](./models/compensation-get-many-compensations-sort-parameter.ts)<a id="sort-compensationgetmanycompensationssortparametermodelscompensation-get-many-compensations-sort-parameterts"></a>

Sort received Compensations by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[CompensationsGetManyResponseMapped](./models/compensations-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.compensation.getOne`<a id="alexishrcompensationgetone"></a>

Get One Compensation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneResponse = await alexishr.compensation.getOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Compensation fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

#### 🔄 Return<a id="🔄-return"></a>

[CompensationGetOneResponseMapped](./models/compensation-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.compensation.replaceOneCompensation`<a id="alexishrcompensationreplaceonecompensation"></a>

Replace One Compensation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneCompensationResponse =
  await alexishr.compensation.replaceOneCompensation({
    id: "id_example",
    employeeId: "507f1f77bcf86cd799439011",
    userId: "507f1f77bcf86cd799439011",
    currency: "SEK",
    payoutDay: 25,
    payoutPeriod: "MONTHLY",
    payoutFrequency: "MONTH",
    salarySchedule: "ADVANCE",
    paidOvertime: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### employeeId: `string`<a id="employeeid-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### amount: `number`<a id="amount-number"></a>

##### currency: `string`<a id="currency-string"></a>

##### payoutDay: `number`<a id="payoutday-number"></a>

##### payoutPeriod: `string`<a id="payoutperiod-string"></a>

##### payoutFrequency: `string`<a id="payoutfrequency-string"></a>

##### salarySchedule: `string`<a id="salaryschedule-string"></a>

##### paidOvertime: `boolean`<a id="paidovertime-boolean"></a>

##### note: `string`<a id="note-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CompensationResponseMapped](./models/compensation-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.compensation.updateOne`<a id="alexishrcompensationupdateone"></a>

Update One Compensation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneResponse = await alexishr.compensation.updateOne({
  id: "id_example",
  employeeId: "507f1f77bcf86cd799439011",
  userId: "507f1f77bcf86cd799439011",
  currency: "SEK",
  payoutDay: 25,
  payoutPeriod: "MONTHLY",
  payoutFrequency: "MONTH",
  salarySchedule: "ADVANCE",
  paidOvertime: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### employeeId: `string`<a id="employeeid-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### amount: `number`<a id="amount-number"></a>

##### currency: `string`<a id="currency-string"></a>

##### payoutDay: `number`<a id="payoutday-number"></a>

##### payoutPeriod: `string`<a id="payoutperiod-string"></a>

##### payoutFrequency: `string`<a id="payoutfrequency-string"></a>

##### salarySchedule: `string`<a id="salaryschedule-string"></a>

##### paidOvertime: `boolean`<a id="paidovertime-boolean"></a>

##### note: `string`<a id="note-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CompensationResponseMapped](./models/compensation-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/compensation/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.costCenter.createOneCostCenter`<a id="alexishrcostcentercreateonecostcenter"></a>

Create One Cost Center

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneCostCenterResponse =
  await alexishr.costCenter.createOneCostCenter({
    code: "code_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostCenterResponseMapped](./models/cost-center-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost-center` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.costCenter.deleteOneCostCenter`<a id="alexishrcostcenterdeleteonecostcenter"></a>

Delete One Cost Center

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneCostCenterResponse =
  await alexishr.costCenter.deleteOneCostCenter({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost-center/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.costCenter.getMany`<a id="alexishrcostcentergetmany"></a>

Get Many Cost Centers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyResponse = await alexishr.costCenter.getMany({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Cost Center fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### filters: [`CostcenterGetManyFiltersParameter`](./models/costcenter-get-many-filters-parameter.ts)<a id="filters-costcentergetmanyfiltersparametermodelscostcenter-get-many-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Cost Centers. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Cost Centers. (e.g. `offset=20`)

##### sort: [`CostcenterGetManySortParameter`](./models/costcenter-get-many-sort-parameter.ts)<a id="sort-costcentergetmanysortparametermodelscostcenter-get-many-sort-parameterts"></a>

Sort received Cost Centers by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[CostCentersGetManyResponseMapped](./models/cost-centers-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost-center` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.costCenter.getOneCostCenter`<a id="alexishrcostcentergetonecostcenter"></a>

Get One Cost Center

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneCostCenterResponse = await alexishr.costCenter.getOneCostCenter({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Cost Center fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

#### 🔄 Return<a id="🔄-return"></a>

[CostCenterGetOneResponseMapped](./models/cost-center-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost-center/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.costCenter.replaceOneCostCenter`<a id="alexishrcostcenterreplaceonecostcenter"></a>

Replace One Cost Center

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneCostCenterResponse =
  await alexishr.costCenter.replaceOneCostCenter({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### code: `string`<a id="code-string"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostCenterResponseMapped](./models/cost-center-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost-center/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.costCenter.updateOneCostCenter`<a id="alexishrcostcenterupdateonecostcenter"></a>

Update One Cost Center

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneCostCenterResponse =
  await alexishr.costCenter.updateOneCostCenter({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### code: `string`<a id="code-string"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostCenterResponseMapped](./models/cost-center-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost-center/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.department.createOne`<a id="alexishrdepartmentcreateone"></a>

Create One Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneResponse = await alexishr.department.createOne({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### description: `string`<a id="description-string"></a>

##### costCenterId: `string`<a id="costcenterid-string"></a>

##### parentId: `string`<a id="parentid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentResponseMapped](./models/department-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/department` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.department.deleteOneDepartment`<a id="alexishrdepartmentdeleteonedepartment"></a>

Delete One Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneDepartmentResponse =
  await alexishr.department.deleteOneDepartment({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/department/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.department.getOne`<a id="alexishrdepartmentgetone"></a>

Get One Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneResponse = await alexishr.department.getOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Department fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Department resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentGetOneResponseMapped](./models/department-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/department/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.department.listManyDepartments`<a id="alexishrdepartmentlistmanydepartments"></a>

Get Many Departments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManyDepartmentsResponse =
  await alexishr.department.listManyDepartments({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Department fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Department resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`DepartmentListManyDepartmentsFiltersParameter`](./models/department-list-many-departments-filters-parameter.ts)<a id="filters-departmentlistmanydepartmentsfiltersparametermodelsdepartment-list-many-departments-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Departments. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Departments. (e.g. `offset=20`)

##### sort: [`DepartmentListManyDepartmentsSortParameter`](./models/department-list-many-departments-sort-parameter.ts)<a id="sort-departmentlistmanydepartmentssortparametermodelsdepartment-list-many-departments-sort-parameterts"></a>

Sort received Departments by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsGetManyResponseMapped](./models/departments-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/department` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.department.replaceOne`<a id="alexishrdepartmentreplaceone"></a>

Replace One Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneResponse = await alexishr.department.replaceOne({
  id: "id_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### description: `string`<a id="description-string"></a>

##### costCenterId: `string`<a id="costcenterid-string"></a>

##### parentId: `string`<a id="parentid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentResponseMapped](./models/department-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/department/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.department.updateOneDepartment`<a id="alexishrdepartmentupdateonedepartment"></a>

Update One Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneDepartmentResponse =
  await alexishr.department.updateOneDepartment({
    id: "id_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### description: `string`<a id="description-string"></a>

##### costCenterId: `string`<a id="costcenterid-string"></a>

##### parentId: `string`<a id="parentid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentResponseMapped](./models/department-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/department/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employee.createOneEmployee`<a id="alexishremployeecreateoneemployee"></a>

Create One Employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneEmployeeResponse = await alexishr.employee.createOneEmployee({
  officeId: "507f1f77bcf86cd799439011",
  managerEmployeeId: "507f1f77bcf86cd799439011",
  departmentId: "507f1f77bcf86cd799439011",
  costCenterId: "507f1f77bcf86cd799439011",
  userName: "john.doe@example.com",
  division: "Division 1",
  organization: "Organization 1",
  employeeNumber: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

##### officeId: `string`<a id="officeid-string"></a>

##### managerEmployeeId: `string`<a id="manageremployeeid-string"></a>

##### departmentId: `string`<a id="departmentid-string"></a>

##### costCenterId: `string`<a id="costcenterid-string"></a>

##### userName: `string`<a id="username-string"></a>

##### division: `string`<a id="division-string"></a>

##### organization: `string`<a id="organization-string"></a>

##### employeeNumber: `string`<a id="employeenumber-string"></a>

##### tax: [`EmployeeTaxRequest`](./models/employee-tax-request.ts)<a id="tax-employeetaxrequestmodelsemployee-tax-requestts"></a>

##### workEmail: `string`<a id="workemail-string"></a>

##### workPhone: `string`<a id="workphone-string"></a>

##### hasOccupationalPension: `boolean`<a id="hasoccupationalpension-boolean"></a>

##### privateEmail: `string`<a id="privateemail-string"></a>

##### firstName: `string`<a id="firstname-string"></a>

##### lastName: `string`<a id="lastname-string"></a>

##### ssn: `string`<a id="ssn-string"></a>

##### privatePhone: `string`<a id="privatephone-string"></a>

##### birthDate: `string`<a id="birthdate-string"></a>

##### avatarUrl: `string`<a id="avatarurl-string"></a>

##### nationality: `string`<a id="nationality-string"></a>

##### gender: `string`<a id="gender-string"></a>

##### pronoun: `string`<a id="pronoun-string"></a>

##### bankAccount: [`BankAccountRequest`](./models/bank-account-request.ts)<a id="bankaccount-bankaccountrequestmodelsbank-account-requestts"></a>

##### homeAddress: [`HomeAddressRequest`](./models/home-address-request.ts)<a id="homeaddress-homeaddressrequestmodelshome-address-requestts"></a>

##### custom: `object`<a id="custom-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeResponseMapped](./models/employee-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employee.getOne`<a id="alexishremployeegetone"></a>

Get One Employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneResponse = await alexishr.employee.getOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Employee fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Employee resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeGetOneResponseMapped](./models/employee-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employee.listManyEmployees`<a id="alexishremployeelistmanyemployees"></a>

Get Many Employees

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManyEmployeesResponse = await alexishr.employee.listManyEmployees({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Employee fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Employee resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`EmployeeListManyEmployeesFiltersParameter`](./models/employee-list-many-employees-filters-parameter.ts)<a id="filters-employeelistmanyemployeesfiltersparametermodelsemployee-list-many-employees-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Employees. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Employees. (e.g. `offset=20`)

##### sort: [`EmployeeListManyEmployeesSortParameter`](./models/employee-list-many-employees-sort-parameter.ts)<a id="sort-employeelistmanyemployeessortparametermodelsemployee-list-many-employees-sort-parameterts"></a>

Sort received Employees by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesGetManyResponseMapped](./models/employees-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employee.removeEmployee`<a id="alexishremployeeremoveemployee"></a>

Delete One Employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEmployeeResponse = await alexishr.employee.removeEmployee({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employee.replaceOneEmployee`<a id="alexishremployeereplaceoneemployee"></a>

Replace One Employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneEmployeeResponse = await alexishr.employee.replaceOneEmployee({
  id: "id_example",
  officeId: "507f1f77bcf86cd799439011",
  managerEmployeeId: "507f1f77bcf86cd799439011",
  departmentId: "507f1f77bcf86cd799439011",
  costCenterId: "507f1f77bcf86cd799439011",
  userName: "john.doe@example.com",
  division: "Division 1",
  organization: "Organization 1",
  employeeNumber: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### title: `string`<a id="title-string"></a>

##### officeId: `string`<a id="officeid-string"></a>

##### managerEmployeeId: `string`<a id="manageremployeeid-string"></a>

##### departmentId: `string`<a id="departmentid-string"></a>

##### costCenterId: `string`<a id="costcenterid-string"></a>

##### userName: `string`<a id="username-string"></a>

##### division: `string`<a id="division-string"></a>

##### organization: `string`<a id="organization-string"></a>

##### employeeNumber: `string`<a id="employeenumber-string"></a>

##### tax: [`EmployeeTaxRequest`](./models/employee-tax-request.ts)<a id="tax-employeetaxrequestmodelsemployee-tax-requestts"></a>

##### workEmail: `string`<a id="workemail-string"></a>

##### workPhone: `string`<a id="workphone-string"></a>

##### hasOccupationalPension: `boolean`<a id="hasoccupationalpension-boolean"></a>

##### privateEmail: `string`<a id="privateemail-string"></a>

##### firstName: `string`<a id="firstname-string"></a>

##### lastName: `string`<a id="lastname-string"></a>

##### ssn: `string`<a id="ssn-string"></a>

##### privatePhone: `string`<a id="privatephone-string"></a>

##### birthDate: `string`<a id="birthdate-string"></a>

##### avatarUrl: `string`<a id="avatarurl-string"></a>

##### nationality: `string`<a id="nationality-string"></a>

##### gender: `string`<a id="gender-string"></a>

##### pronoun: `string`<a id="pronoun-string"></a>

##### bankAccount: [`BankAccountRequest`](./models/bank-account-request.ts)<a id="bankaccount-bankaccountrequestmodelsbank-account-requestts"></a>

##### homeAddress: [`HomeAddressRequest`](./models/home-address-request.ts)<a id="homeaddress-homeaddressrequestmodelshome-address-requestts"></a>

##### custom: `object`<a id="custom-object"></a>

##### active: `boolean`<a id="active-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeResponseMapped](./models/employee-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employee.updateOne`<a id="alexishremployeeupdateone"></a>

Update One Employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneResponse = await alexishr.employee.updateOne({
  id: "id_example",
  officeId: "507f1f77bcf86cd799439011",
  managerEmployeeId: "507f1f77bcf86cd799439011",
  departmentId: "507f1f77bcf86cd799439011",
  costCenterId: "507f1f77bcf86cd799439011",
  userName: "john.doe@example.com",
  division: "Division 1",
  organization: "Organization 1",
  employeeNumber: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### title: `string`<a id="title-string"></a>

##### officeId: `string`<a id="officeid-string"></a>

##### managerEmployeeId: `string`<a id="manageremployeeid-string"></a>

##### departmentId: `string`<a id="departmentid-string"></a>

##### costCenterId: `string`<a id="costcenterid-string"></a>

##### userName: `string`<a id="username-string"></a>

##### division: `string`<a id="division-string"></a>

##### organization: `string`<a id="organization-string"></a>

##### employeeNumber: `string`<a id="employeenumber-string"></a>

##### tax: [`EmployeeTaxRequest`](./models/employee-tax-request.ts)<a id="tax-employeetaxrequestmodelsemployee-tax-requestts"></a>

##### workEmail: `string`<a id="workemail-string"></a>

##### workPhone: `string`<a id="workphone-string"></a>

##### hasOccupationalPension: `boolean`<a id="hasoccupationalpension-boolean"></a>

##### privateEmail: `string`<a id="privateemail-string"></a>

##### firstName: `string`<a id="firstname-string"></a>

##### lastName: `string`<a id="lastname-string"></a>

##### ssn: `string`<a id="ssn-string"></a>

##### privatePhone: `string`<a id="privatephone-string"></a>

##### birthDate: `string`<a id="birthdate-string"></a>

##### avatarUrl: `string`<a id="avatarurl-string"></a>

##### nationality: `string`<a id="nationality-string"></a>

##### gender: `string`<a id="gender-string"></a>

##### pronoun: `string`<a id="pronoun-string"></a>

##### bankAccount: [`BankAccountRequest`](./models/bank-account-request.ts)<a id="bankaccount-bankaccountrequestmodelsbank-account-requestts"></a>

##### homeAddress: [`HomeAddressRequest`](./models/home-address-request.ts)<a id="homeaddress-homeaddressrequestmodelshome-address-requestts"></a>

##### custom: `object`<a id="custom-object"></a>

##### active: `boolean`<a id="active-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeResponseMapped](./models/employee-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employeeTeamReference.createOneEmployeeTeamReference`<a id="alexishremployeeteamreferencecreateoneemployeeteamreference"></a>

Create One EmployeeTeamReference

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneEmployeeTeamReferenceResponse =
  await alexishr.employeeTeamReference.createOneEmployeeTeamReference({
    teamId: "507f1f77bcf86cd799439011",
    companyId: "507f1f77bcf86cd799439011",
    employeeId: "507f1f77bcf86cd799439011",
    userId: "507f1f77bcf86cd799439011",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

##### companyId: `string`<a id="companyid-string"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### userId: `string`<a id="userid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeTeamReferenceResponseMapped](./models/employee-team-reference-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee-team-reference` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employeeTeamReference.deleteOne`<a id="alexishremployeeteamreferencedeleteone"></a>

Delete One EmployeeTeamReference

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneResponse = await alexishr.employeeTeamReference.deleteOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee-team-reference/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employeeTeamReference.getMany`<a id="alexishremployeeteamreferencegetmany"></a>

Get Many EmployeeTeamReferences

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyResponse = await alexishr.employeeTeamReference.getMany({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select EmployeeTeamReference fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related EmployeeTeamReference resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`EmployeeteamreferenceGetManyFiltersParameter`](./models/employeeteamreference-get-many-filters-parameter.ts)<a id="filters-employeeteamreferencegetmanyfiltersparametermodelsemployeeteamreference-get-many-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received EmployeeTeamReferences. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received EmployeeTeamReferences. (e.g. `offset=20`)

##### sort: [`EmployeeteamreferenceGetManySortParameter`](./models/employeeteamreference-get-many-sort-parameter.ts)<a id="sort-employeeteamreferencegetmanysortparametermodelsemployeeteamreference-get-many-sort-parameterts"></a>

Sort received EmployeeTeamReferences by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeTeamReferencesGetManyResponseMapped](./models/employee-team-references-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee-team-reference` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employeeTeamReference.getOneEmployeeTeamReference`<a id="alexishremployeeteamreferencegetoneemployeeteamreference"></a>

Get One EmployeeTeamReference

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneEmployeeTeamReferenceResponse =
  await alexishr.employeeTeamReference.getOneEmployeeTeamReference({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select EmployeeTeamReference fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related EmployeeTeamReference resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeTeamReferenceGetOneResponseMapped](./models/employee-team-reference-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee-team-reference/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employeeTeamReference.replaceOne`<a id="alexishremployeeteamreferencereplaceone"></a>

Replace One EmployeeTeamReference

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneResponse = await alexishr.employeeTeamReference.replaceOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeTeamReferenceResponseMapped](./models/employee-team-reference-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee-team-reference/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employeeTeamReference.updateOneEmployeeTeamReference`<a id="alexishremployeeteamreferenceupdateoneemployeeteamreference"></a>

Update One EmployeeTeamReference

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneEmployeeTeamReferenceResponse =
  await alexishr.employeeTeamReference.updateOneEmployeeTeamReference({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### teamId: `string`<a id="teamid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeTeamReferenceResponseMapped](./models/employee-team-reference-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employee-team-reference/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employment.createOneEmployment`<a id="alexishremploymentcreateoneemployment"></a>

Create One Employment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneEmploymentResponse =
  await alexishr.employment.createOneEmployment({
    employeeId: "507f1f77bcf86cd799439011",
    userId: "507f1f77bcf86cd799439011",
    typeId: "507f1f77bcf86cd799439011",
    startDate: "1970-01-01T00:00:00.00Z",
    terminated: true,
    rate: 3.14,
    country: "SE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### typeId: `string`<a id="typeid-string"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### terminated: `boolean`<a id="terminated-boolean"></a>

##### rate: `number`<a id="rate-number"></a>

##### country: `string`<a id="country-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

##### effectiveEndDate: `string`<a id="effectiveenddate-string"></a>

##### note: `string`<a id="note-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponseMapped](./models/employment-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employment.getOne`<a id="alexishremploymentgetone"></a>

Get One Employment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneResponse = await alexishr.employment.getOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Employment fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Employment resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentGetOneResponseMapped](./models/employment-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employment.listManyEmployments`<a id="alexishremploymentlistmanyemployments"></a>

Get Many Employments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManyEmploymentsResponse =
  await alexishr.employment.listManyEmployments({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Employment fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Employment resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`EmploymentListManyEmploymentsFiltersParameter`](./models/employment-list-many-employments-filters-parameter.ts)<a id="filters-employmentlistmanyemploymentsfiltersparametermodelsemployment-list-many-employments-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Employments. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Employments. (e.g. `offset=20`)

##### sort: [`EmploymentListManyEmploymentsSortParameter`](./models/employment-list-many-employments-sort-parameter.ts)<a id="sort-employmentlistmanyemploymentssortparametermodelsemployment-list-many-employments-sort-parameterts"></a>

Sort received Employments by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentsGetManyResponseMapped](./models/employments-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employment.removeOne`<a id="alexishremploymentremoveone"></a>

Delete One Employment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeOneResponse = await alexishr.employment.removeOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employment.replaceOne`<a id="alexishremploymentreplaceone"></a>

Replace One Employment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneResponse = await alexishr.employment.replaceOne({
  id: "id_example",
  employeeId: "507f1f77bcf86cd799439011",
  userId: "507f1f77bcf86cd799439011",
  typeId: "507f1f77bcf86cd799439011",
  country: "SE",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### employeeId: `string`<a id="employeeid-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### typeId: `string`<a id="typeid-string"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

##### effectiveEndDate: `string`<a id="effectiveenddate-string"></a>

##### terminated: `boolean`<a id="terminated-boolean"></a>

##### rate: `number`<a id="rate-number"></a>

##### note: `string`<a id="note-string"></a>

##### country: `string`<a id="country-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponseMapped](./models/employment-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employment.updateEmploymentData`<a id="alexishremploymentupdateemploymentdata"></a>

Update One Employment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmploymentDataResponse =
  await alexishr.employment.updateEmploymentData({
    id: "id_example",
    employeeId: "507f1f77bcf86cd799439011",
    userId: "507f1f77bcf86cd799439011",
    typeId: "507f1f77bcf86cd799439011",
    country: "SE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### employeeId: `string`<a id="employeeid-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### typeId: `string`<a id="typeid-string"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

##### effectiveEndDate: `string`<a id="effectiveenddate-string"></a>

##### terminated: `boolean`<a id="terminated-boolean"></a>

##### rate: `number`<a id="rate-number"></a>

##### note: `string`<a id="note-string"></a>

##### country: `string`<a id="country-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponseMapped](./models/employment-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employmentType.createOneEmploymentType`<a id="alexishremploymenttypecreateoneemploymenttype"></a>

Create One Employment Type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneEmploymentTypeResponse =
  await alexishr.employmentType.createOneEmploymentType({
    name: "name_example",
    vacation: false,
    country: "SE",
    maxMonths: 12,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### vacation: `boolean`<a id="vacation-boolean"></a>

##### country: `string`<a id="country-string"></a>

##### maxMonths: `number`<a id="maxmonths-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentTypeResponseMapped](./models/employment-type-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment-type` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employmentType.deleteOneType`<a id="alexishremploymenttypedeleteonetype"></a>

Delete One Employment Type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneTypeResponse = await alexishr.employmentType.deleteOneType({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment-type/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employmentType.getManyEmploymentTypes`<a id="alexishremploymenttypegetmanyemploymenttypes"></a>

Get Many Employment Types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyEmploymentTypesResponse =
  await alexishr.employmentType.getManyEmploymentTypes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Employment Type fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### filters: [`EmploymenttypeGetManyEmploymentTypesFiltersParameter`](./models/employmenttype-get-many-employment-types-filters-parameter.ts)<a id="filters-employmenttypegetmanyemploymenttypesfiltersparametermodelsemploymenttype-get-many-employment-types-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Employment Types. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Employment Types. (e.g. `offset=20`)

##### sort: [`EmploymenttypeGetManyEmploymentTypesSortParameter`](./models/employmenttype-get-many-employment-types-sort-parameter.ts)<a id="sort-employmenttypegetmanyemploymenttypessortparametermodelsemploymenttype-get-many-employment-types-sort-parameterts"></a>

Sort received Employment Types by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentTypesGetManyResponseMapped](./models/employment-types-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment-type` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employmentType.getOne`<a id="alexishremploymenttypegetone"></a>

Get One Employment Type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneResponse = await alexishr.employmentType.getOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Employment Type fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentTypeGetOneResponseMapped](./models/employment-type-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment-type/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employmentType.updateOneEmploymentType`<a id="alexishremploymenttypeupdateoneemploymenttype"></a>

Replace One Employment Type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneEmploymentTypeResponse =
  await alexishr.employmentType.updateOneEmploymentType({
    id: "id_example",
    vacation: false,
    country: "SE",
    maxMonths: 12,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### name: `string`<a id="name-string"></a>

##### vacation: `boolean`<a id="vacation-boolean"></a>

##### maxMonths: `number`<a id="maxmonths-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentTypeResponseMapped](./models/employment-type-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment-type/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.employmentType.updateOneEmploymentType_0`<a id="alexishremploymenttypeupdateoneemploymenttype_0"></a>

Update One Employment Type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneEmploymentType_0Response =
  await alexishr.employmentType.updateOneEmploymentType_0({
    id: "id_example",
    vacation: false,
    country: "SE",
    maxMonths: 12,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### name: `string`<a id="name-string"></a>

##### vacation: `boolean`<a id="vacation-boolean"></a>

##### maxMonths: `number`<a id="maxmonths-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentTypeResponseMapped](./models/employment-type-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment-type/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leave.createOne`<a id="alexishrleavecreateone"></a>

Create One Leave

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneResponse = await alexishr.leave.createOne({
  employeeId: "507f1f77bcf86cd799439011",
  typeId: "507f1f77bcf86cd799439011",
  childId: "507f1f77bcf86cd799439011",
  duration: "minutes",
  startDate: "1970-01-01T00:00:00.00Z",
  endDate: "1970-01-01T00:00:00.00Z",
  extent: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### typeId: `string`<a id="typeid-string"></a>

##### duration: `string`<a id="duration-string"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

##### description: `string`<a id="description-string"></a>

##### childId: `string`<a id="childid-string"></a>

##### extent: `number`<a id="extent-number"></a>

##### morning: `object`<a id="morning-object"></a>

##### afternoon: `object`<a id="afternoon-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LeaveResponseMapped](./models/leave-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leave.deleteOneLeave`<a id="alexishrleavedeleteoneleave"></a>

Delete One Leave

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneLeaveResponse = await alexishr.leave.deleteOneLeave({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leave.getManyLeaves`<a id="alexishrleavegetmanyleaves"></a>

Get Many Leaves

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyLeavesResponse = await alexishr.leave.getManyLeaves({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Leave fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Leave resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`LeaveGetManyLeavesFiltersParameter`](./models/leave-get-many-leaves-filters-parameter.ts)<a id="filters-leavegetmanyleavesfiltersparametermodelsleave-get-many-leaves-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Leaves. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Leaves. (e.g. `offset=20`)

##### sort: [`LeaveGetManyLeavesSortParameter`](./models/leave-get-many-leaves-sort-parameter.ts)<a id="sort-leavegetmanyleavessortparametermodelsleave-get-many-leaves-sort-parameterts"></a>

Sort received Leaves by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[LeavesGetManyResponseMapped](./models/leaves-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leave.getOneLeave`<a id="alexishrleavegetoneleave"></a>

Get One Leave

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneLeaveResponse = await alexishr.leave.getOneLeave({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Leave fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Leave resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[LeaveGetOneResponseMapped](./models/leave-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leave.replaceOne`<a id="alexishrleavereplaceone"></a>

Replace One Leave

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneResponse = await alexishr.leave.replaceOne({
  id: "id_example",
  description: "Description",
  childId: "507f1f77bcf86cd799439011",
  duration: "minutes",
  extent: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### extent: `number`<a id="extent-number"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### description: `string`<a id="description-string"></a>

##### childId: `string`<a id="childid-string"></a>

##### duration: `string`<a id="duration-string"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

##### morning: `boolean`<a id="morning-boolean"></a>

##### afternoon: `boolean`<a id="afternoon-boolean"></a>

##### status: `string`<a id="status-string"></a>

##### approvalNote: `string`<a id="approvalnote-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LeaveResponseMapped](./models/leave-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leave.updateOneLeave`<a id="alexishrleaveupdateoneleave"></a>

Update One Leave

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneLeaveResponse = await alexishr.leave.updateOneLeave({
  id: "id_example",
  description: "Description",
  childId: "507f1f77bcf86cd799439011",
  duration: "minutes",
  extent: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### extent: `number`<a id="extent-number"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### description: `string`<a id="description-string"></a>

##### childId: `string`<a id="childid-string"></a>

##### duration: `string`<a id="duration-string"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

##### morning: `boolean`<a id="morning-boolean"></a>

##### afternoon: `boolean`<a id="afternoon-boolean"></a>

##### status: `string`<a id="status-string"></a>

##### approvalNote: `string`<a id="approvalnote-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LeaveResponseMapped](./models/leave-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leaveTransaction.getOneLeaveTransaction`<a id="alexishrleavetransactiongetoneleavetransaction"></a>

Get One LeaveTransaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneLeaveTransactionResponse =
  await alexishr.leaveTransaction.getOneLeaveTransaction({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select LeaveTransaction fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related LeaveTransaction resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[LeaveTransactionGetOneResponseMapped](./models/leave-transaction-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-transaction/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leaveTransaction.listManyTransactions`<a id="alexishrleavetransactionlistmanytransactions"></a>

Get Many LeaveTransactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManyTransactionsResponse =
  await alexishr.leaveTransaction.listManyTransactions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select LeaveTransaction fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related LeaveTransaction resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`LeavetransactionListManyTransactionsFiltersParameter`](./models/leavetransaction-list-many-transactions-filters-parameter.ts)<a id="filters-leavetransactionlistmanytransactionsfiltersparametermodelsleavetransaction-list-many-transactions-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received LeaveTransactions. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received LeaveTransactions. (e.g. `offset=20`)

##### sort: [`LeavetransactionListManyTransactionsSortParameter`](./models/leavetransaction-list-many-transactions-sort-parameter.ts)<a id="sort-leavetransactionlistmanytransactionssortparametermodelsleavetransaction-list-many-transactions-sort-parameterts"></a>

Sort received LeaveTransactions by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[LeaveTransactionsGetManyResponseMapped](./models/leave-transactions-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-transaction` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leaveType.createOneLeaveType`<a id="alexishrleavetypecreateoneleavetype"></a>

Create One LeaveType

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneLeaveTypeResponse = await alexishr.leaveType.createOneLeaveType({
  name: "name_example",
  kind: "SICK_LEAVE",
  minimumDuration: "DAY",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### kind: `string`<a id="kind-string"></a>

##### minimumDuration: `string`<a id="minimumduration-string"></a>

##### deductible: `boolean`<a id="deductible-boolean"></a>

##### paid: `boolean`<a id="paid-boolean"></a>

##### disabled: `boolean`<a id="disabled-boolean"></a>

##### archived: `boolean`<a id="archived-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LeaveTypeResponseMapped](./models/leave-type-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-type` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leaveType.deleteOneLeaveType`<a id="alexishrleavetypedeleteoneleavetype"></a>

Delete One LeaveType

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneLeaveTypeResponse = await alexishr.leaveType.deleteOneLeaveType({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-type/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leaveType.getManyLeaveTypes`<a id="alexishrleavetypegetmanyleavetypes"></a>

Get Many LeaveTypes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyLeaveTypesResponse = await alexishr.leaveType.getManyLeaveTypes(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select LeaveType fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related LeaveType resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`LeavetypeGetManyLeaveTypesFiltersParameter`](./models/leavetype-get-many-leave-types-filters-parameter.ts)<a id="filters-leavetypegetmanyleavetypesfiltersparametermodelsleavetype-get-many-leave-types-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received LeaveTypes. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received LeaveTypes. (e.g. `offset=20`)

##### sort: [`LeavetypeGetManyLeaveTypesSortParameter`](./models/leavetype-get-many-leave-types-sort-parameter.ts)<a id="sort-leavetypegetmanyleavetypessortparametermodelsleavetype-get-many-leave-types-sort-parameterts"></a>

Sort received LeaveTypes by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[LeaveTypesGetManyResponseMapped](./models/leave-types-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-type` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leaveType.getOneLeaveType`<a id="alexishrleavetypegetoneleavetype"></a>

Get One LeaveType

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneLeaveTypeResponse = await alexishr.leaveType.getOneLeaveType({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select LeaveType fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related LeaveType resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[LeaveTypeGetOneResponseMapped](./models/leave-type-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-type/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leaveType.replaceLeaveType`<a id="alexishrleavetypereplaceleavetype"></a>

Replace One LeaveType

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceLeaveTypeResponse = await alexishr.leaveType.replaceLeaveType({
  id: "id_example",
  kind: "SICK_LEAVE",
  minimumDuration: "DAY",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### name: `string`<a id="name-string"></a>

##### kind: `string`<a id="kind-string"></a>

##### minimumDuration: `string`<a id="minimumduration-string"></a>

##### deductible: `boolean`<a id="deductible-boolean"></a>

##### paid: `boolean`<a id="paid-boolean"></a>

##### disabled: `boolean`<a id="disabled-boolean"></a>

##### archived: `boolean`<a id="archived-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LeaveTypeResponseMapped](./models/leave-type-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-type/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.leaveType.updateOneLeaveType`<a id="alexishrleavetypeupdateoneleavetype"></a>

Update One LeaveType

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneLeaveTypeResponse = await alexishr.leaveType.updateOneLeaveType({
  id: "id_example",
  kind: "SICK_LEAVE",
  minimumDuration: "DAY",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### name: `string`<a id="name-string"></a>

##### kind: `string`<a id="kind-string"></a>

##### minimumDuration: `string`<a id="minimumduration-string"></a>

##### deductible: `boolean`<a id="deductible-boolean"></a>

##### paid: `boolean`<a id="paid-boolean"></a>

##### disabled: `boolean`<a id="disabled-boolean"></a>

##### archived: `boolean`<a id="archived-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LeaveTypeResponseMapped](./models/leave-type-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-type/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.office.createOneOffice`<a id="alexishrofficecreateoneoffice"></a>

Create One Office

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneOfficeResponse = await alexishr.office.createOneOffice({
  name: "name_example",
  phone: "phone_example",
  email: "email_example",
  timezone: "Africa/Abidjan",
  CFAR: "CFAR_example",
  SCB: "SCB_example",
  SNI: "SNI_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### phone: `string`<a id="phone-string"></a>

##### email: `string`<a id="email-string"></a>

##### timezone: `string`<a id="timezone-string"></a>

##### CFAR: `string`<a id="cfar-string"></a>

##### SCB: `string`<a id="scb-string"></a>

##### SNI: `string`<a id="sni-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OfficeResponseMapped](./models/office-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/office` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.office.deleteOne`<a id="alexishrofficedeleteone"></a>

Delete One Office

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneResponse = await alexishr.office.deleteOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/office/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.office.getOneOffice`<a id="alexishrofficegetoneoffice"></a>

Get One Office

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneOfficeResponse = await alexishr.office.getOneOffice({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Office fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

#### 🔄 Return<a id="🔄-return"></a>

[OfficeGetOneResponseMapped](./models/office-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/office/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.office.listManyOffices`<a id="alexishrofficelistmanyoffices"></a>

Get Many Offices

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManyOfficesResponse = await alexishr.office.listManyOffices({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Office fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### filters: [`OfficeListManyOfficesFiltersParameter`](./models/office-list-many-offices-filters-parameter.ts)<a id="filters-officelistmanyofficesfiltersparametermodelsoffice-list-many-offices-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Offices. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Offices. (e.g. `offset=20`)

##### sort: [`OfficeListManyOfficesSortParameter`](./models/office-list-many-offices-sort-parameter.ts)<a id="sort-officelistmanyofficessortparametermodelsoffice-list-many-offices-sort-parameterts"></a>

Sort received Offices by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[OfficesGetManyResponseMapped](./models/offices-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/office` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.office.replaceOne`<a id="alexishrofficereplaceone"></a>

Replace One Office

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneResponse = await alexishr.office.replaceOne({
  id: "id_example",
  timezone: "Africa/Abidjan",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### name: `string`<a id="name-string"></a>

##### phone: `string`<a id="phone-string"></a>

##### email: `string`<a id="email-string"></a>

##### timezone: `string`<a id="timezone-string"></a>

##### CFAR: `string`<a id="cfar-string"></a>

##### SCB: `string`<a id="scb-string"></a>

##### SNI: `string`<a id="sni-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OfficeResponseMapped](./models/office-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/office/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.office.updateOne`<a id="alexishrofficeupdateone"></a>

Update One Office

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneResponse = await alexishr.office.updateOne({
  id: "id_example",
  timezone: "Africa/Abidjan",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### name: `string`<a id="name-string"></a>

##### phone: `string`<a id="phone-string"></a>

##### email: `string`<a id="email-string"></a>

##### timezone: `string`<a id="timezone-string"></a>

##### CFAR: `string`<a id="cfar-string"></a>

##### SCB: `string`<a id="scb-string"></a>

##### SNI: `string`<a id="sni-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OfficeResponseMapped](./models/office-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/office/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.team.createOneTeam`<a id="alexishrteamcreateoneteam"></a>

Create One Team

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneTeamResponse = await alexishr.team.createOneTeam({
  name: "Team 1",
  bgColor: "#dee9fe",
  fgColor: "#032f83",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### bgColor: `string`<a id="bgcolor-string"></a>

##### fgColor: `string`<a id="fgcolor-string"></a>

##### description: `string`<a id="description-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TeamResponseMapped](./models/team-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.team.deleteOne`<a id="alexishrteamdeleteone"></a>

Delete One Team

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneResponse = await alexishr.team.deleteOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.team.getOneTeam`<a id="alexishrteamgetoneteam"></a>

Get One Team

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneTeamResponse = await alexishr.team.getOneTeam({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Team fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

#### 🔄 Return<a id="🔄-return"></a>

[TeamGetOneResponseMapped](./models/team-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.team.listTeams`<a id="alexishrteamlistteams"></a>

Get Many Teams

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamsResponse = await alexishr.team.listTeams({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Team fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### filters: [`TeamListTeamsFiltersParameter`](./models/team-list-teams-filters-parameter.ts)<a id="filters-teamlistteamsfiltersparametermodelsteam-list-teams-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Teams. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Teams. (e.g. `offset=20`)

##### sort: [`TeamListTeamsSortParameter`](./models/team-list-teams-sort-parameter.ts)<a id="sort-teamlistteamssortparametermodelsteam-list-teams-sort-parameterts"></a>

Sort received Teams by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[TeamsGetManyResponseMapped](./models/teams-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.team.replaceTeam`<a id="alexishrteamreplaceteam"></a>

Replace One Team

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceTeamResponse = await alexishr.team.replaceTeam({
  id: "id_example",
  name: "Team 1",
  bgColor: "#dee9fe",
  fgColor: "#032f83",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### description: `string`<a id="description-string"></a>

##### name: `string`<a id="name-string"></a>

##### bgColor: `string`<a id="bgcolor-string"></a>

##### fgColor: `string`<a id="fgcolor-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TeamResponseMapped](./models/team-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.team.updateTeam`<a id="alexishrteamupdateteam"></a>

Update One Team

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTeamResponse = await alexishr.team.updateTeam({
  id: "id_example",
  name: "Team 1",
  bgColor: "#dee9fe",
  fgColor: "#032f83",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### description: `string`<a id="description-string"></a>

##### name: `string`<a id="name-string"></a>

##### bgColor: `string`<a id="bgcolor-string"></a>

##### fgColor: `string`<a id="fgcolor-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TeamResponseMapped](./models/team-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheet.get`<a id="alexishrtimesheetget"></a>

Get One Timesheet

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await alexishr.timesheet.get({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select Timesheet fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Timesheet resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetGetOneResponseMapped](./models/timesheet-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheet.getMany`<a id="alexishrtimesheetgetmany"></a>

Get Many Timesheets

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyResponse = await alexishr.timesheet.getMany({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select Timesheet fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related Timesheet resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`TimesheetGetManyFiltersParameter`](./models/timesheet-get-many-filters-parameter.ts)<a id="filters-timesheetgetmanyfiltersparametermodelstimesheet-get-many-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received Timesheets. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received Timesheets. (e.g. `offset=20`)

##### sort: [`TimesheetGetManySortParameter`](./models/timesheet-get-many-sort-parameter.ts)<a id="sort-timesheetgetmanysortparametermodelstimesheet-get-many-sort-parameterts"></a>

Sort received Timesheets by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsGetManyResponseMapped](./models/timesheets-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheetEntry.createOneEntry`<a id="alexishrtimesheetentrycreateoneentry"></a>

Create One TimesheetEntry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneEntryResponse = await alexishr.timesheetEntry.createOneEntry({
  typeId: "507f1f77bcf86cd799439011",
  employeeId: "507f1f77bcf86cd799439011",
  date: "1970-01-01T00:00:00.00Z",
  minutes: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### typeId: `string`<a id="typeid-string"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### date: `string`<a id="date-string"></a>

##### minutes: `number`<a id="minutes-number"></a>

##### note: `string`<a id="note-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntryResponseMapped](./models/timesheet-entry-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet-entry` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheetEntry.deleteOneEntry`<a id="alexishrtimesheetentrydeleteoneentry"></a>

Delete One TimesheetEntry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneEntryResponse = await alexishr.timesheetEntry.deleteOneEntry({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet-entry/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheetEntry.getOneEntry`<a id="alexishrtimesheetentrygetoneentry"></a>

Get One TimesheetEntry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneEntryResponse = await alexishr.timesheetEntry.getOneEntry({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select TimesheetEntry fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related TimesheetEntry resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntryGetOneResponseMapped](./models/timesheet-entry-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet-entry/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheetEntry.listManyEntries`<a id="alexishrtimesheetentrylistmanyentries"></a>

Get Many TimesheetEntries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManyEntriesResponse = await alexishr.timesheetEntry.listManyEntries(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select TimesheetEntry fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related TimesheetEntry resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`TimesheetentryListManyEntriesFiltersParameter`](./models/timesheetentry-list-many-entries-filters-parameter.ts)<a id="filters-timesheetentrylistmanyentriesfiltersparametermodelstimesheetentry-list-many-entries-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received TimesheetEntries. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received TimesheetEntries. (e.g. `offset=20`)

##### sort: [`TimesheetentryListManyEntriesSortParameter`](./models/timesheetentry-list-many-entries-sort-parameter.ts)<a id="sort-timesheetentrylistmanyentriessortparametermodelstimesheetentry-list-many-entries-sort-parameterts"></a>

Sort received TimesheetEntries by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntriesGetManyResponseMapped](./models/timesheet-entries-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet-entry` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheetEntry.updateOneEntry`<a id="alexishrtimesheetentryupdateoneentry"></a>

Replace One TimesheetEntry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneEntryResponse = await alexishr.timesheetEntry.updateOneEntry({
  id: "id_example",
  typeId: "507f1f77bcf86cd799439011",
  employeeId: "507f1f77bcf86cd799439011",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### typeId: `string`<a id="typeid-string"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### date: `string`<a id="date-string"></a>

##### minutes: `number`<a id="minutes-number"></a>

##### note: `string`<a id="note-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntryResponseMapped](./models/timesheet-entry-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet-entry/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheetEntry.updateOneEntry_0`<a id="alexishrtimesheetentryupdateoneentry_0"></a>

Update One TimesheetEntry

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneEntry_0Response = await alexishr.timesheetEntry.updateOneEntry_0(
  {
    id: "id_example",
    typeId: "507f1f77bcf86cd799439011",
    employeeId: "507f1f77bcf86cd799439011",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### typeId: `string`<a id="typeid-string"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### date: `string`<a id="date-string"></a>

##### minutes: `number`<a id="minutes-number"></a>

##### note: `string`<a id="note-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntryResponseMapped](./models/timesheet-entry-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet-entry/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheetEntryType.getOneTimesheetEntryType`<a id="alexishrtimesheetentrytypegetonetimesheetentrytype"></a>

Get One TimesheetEntryType

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneTimesheetEntryTypeResponse =
  await alexishr.timesheetEntryType.getOneTimesheetEntryType({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select TimesheetEntryType fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntryTypeGetOneResponseMapped](./models/timesheet-entry-type-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet-entry-type/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.timesheetEntryType.listManyTimesheetEntryTypes`<a id="alexishrtimesheetentrytypelistmanytimesheetentrytypes"></a>

Get Many TimesheetEntryTypes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManyTimesheetEntryTypesResponse =
  await alexishr.timesheetEntryType.listManyTimesheetEntryTypes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select TimesheetEntryType fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### filters: [`TimesheetentrytypeListManyTimesheetEntryTypesFiltersParameter`](./models/timesheetentrytype-list-many-timesheet-entry-types-filters-parameter.ts)<a id="filters-timesheetentrytypelistmanytimesheetentrytypesfiltersparametermodelstimesheetentrytype-list-many-timesheet-entry-types-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received TimesheetEntryTypes. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received TimesheetEntryTypes. (e.g. `offset=20`)

##### sort: [`TimesheetentrytypeListManyTimesheetEntryTypesSortParameter`](./models/timesheetentrytype-list-many-timesheet-entry-types-sort-parameter.ts)<a id="sort-timesheetentrytypelistmanytimesheetentrytypessortparametermodelstimesheetentrytype-list-many-timesheet-entry-types-sort-parameterts"></a>

Sort received TimesheetEntryTypes by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetEntryTypesGetManyResponseMapped](./models/timesheet-entry-types-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheet-entry-type` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.workWeek.createOneWorkweek`<a id="alexishrworkweekcreateoneworkweek"></a>

Create One WorkWeek

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneWorkweekResponse = await alexishr.workWeek.createOneWorkweek({
  employeeId: "507f1f77bcf86cd799439011",
  officeId: "507f1f77bcf86cd799439011",
  effectiveFrom: "1970-01-01T00:00:00.00Z",
  timezone: "timezone_example",
  duration: 3.14,
  monday: {
    working: true,
    duration: 3.14,
    shifts: [
      {
        startHour: 3.14,
        startMinute: 3.14,
        endHour: 3.14,
        endMinute: 3.14,
        duration: 3.14,
      },
    ],
  },
  tuesday: {},
  wednesday: {},
  thursday: {},
  friday: {},
  saturday: {},
  sunday: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveFrom: `string`<a id="effectivefrom-string"></a>

##### timezone: `string`<a id="timezone-string"></a>

##### duration: `number`<a id="duration-number"></a>

##### monday: [`WorkWeekDayRequest`](./models/work-week-day-request.ts)<a id="monday-workweekdayrequestmodelswork-week-day-requestts"></a>

##### tuesday: [`WorkWeekDayRequest`](./models/work-week-day-request.ts)<a id="tuesday-workweekdayrequestmodelswork-week-day-requestts"></a>

##### wednesday: [`WorkWeekDayRequest`](./models/work-week-day-request.ts)<a id="wednesday-workweekdayrequestmodelswork-week-day-requestts"></a>

##### thursday: [`WorkWeekDayRequest`](./models/work-week-day-request.ts)<a id="thursday-workweekdayrequestmodelswork-week-day-requestts"></a>

##### friday: [`WorkWeekDayRequest`](./models/work-week-day-request.ts)<a id="friday-workweekdayrequestmodelswork-week-day-requestts"></a>

##### saturday: [`WorkWeekDayRequest`](./models/work-week-day-request.ts)<a id="saturday-workweekdayrequestmodelswork-week-day-requestts"></a>

##### sunday: [`WorkWeekDayRequest`](./models/work-week-day-request.ts)<a id="sunday-workweekdayrequestmodelswork-week-day-requestts"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

##### officeId: `string`<a id="officeid-string"></a>

##### effectiveTo: `string`<a id="effectiveto-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkWeekResponseMapped](./models/work-week-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-week` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.workWeek.deleteOne`<a id="alexishrworkweekdeleteone"></a>

Delete One WorkWeek

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOneResponse = await alexishr.workWeek.deleteOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

#### 🔄 Return<a id="🔄-return"></a>

[EmptyResponseMapped](./models/empty-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-week/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.workWeek.getMany`<a id="alexishrworkweekgetmany"></a>

Get Many WorkWeeks

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManyResponse = await alexishr.workWeek.getMany({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### select: `string`[]<a id="select-string"></a>

Select WorkWeek fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related WorkWeek resources, comma-separated. (e.g. `relations=office,department`)

##### filters: [`WorkweekGetManyFiltersParameter`](./models/workweek-get-many-filters-parameter.ts)<a id="filters-workweekgetmanyfiltersparametermodelsworkweek-get-many-filters-parameterts"></a>

Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)

##### limit: `number`<a id="limit-number"></a>

Limit amount of received WorkWeeks. (e.g. `limit=20`)

##### offset: `number`<a id="offset-number"></a>

Offset amount of received WorkWeeks. (e.g. `offset=20`)

##### sort: [`WorkweekGetManySortParameter`](./models/workweek-get-many-sort-parameter.ts)<a id="sort-workweekgetmanysortparametermodelsworkweek-get-many-sort-parameterts"></a>

Sort received WorkWeeks by field. (e.g. `sort[id]=asc`)

#### 🔄 Return<a id="🔄-return"></a>

[WorkWeeksGetManyResponseMapped](./models/work-weeks-get-many-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-week` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.workWeek.getOne`<a id="alexishrworkweekgetone"></a>

Get One WorkWeek

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneResponse = await alexishr.workWeek.getOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### select: `string`[]<a id="select-string"></a>

Select WorkWeek fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)

##### relations: `string`[]<a id="relations-string"></a>

Select related WorkWeek resources, comma-separated. (e.g. `relations=office,department`)

#### 🔄 Return<a id="🔄-return"></a>

[WorkWeekGetOneResponseMapped](./models/work-week-get-one-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-week/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.workWeek.replaceOne`<a id="alexishrworkweekreplaceone"></a>

Replace One WorkWeek

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceOneResponse = await alexishr.workWeek.replaceOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### effectiveTo: `string`<a id="effectiveto-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkWeekResponseMapped](./models/work-week-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-week/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `alexishr.workWeek.updateOne`<a id="alexishrworkweekupdateone"></a>

Update One WorkWeek

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOneResponse = await alexishr.workWeek.updateOne({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Resource Id

##### effectiveTo: `string`<a id="effectiveto-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkWeekResponseMapped](./models/work-week-response-mapped.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-week/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
