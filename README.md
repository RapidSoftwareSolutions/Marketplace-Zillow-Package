# Zillow Package

* Domain: zillow.com
* Credentials: zwsId

## How to get credentials: 
In order to start making requests to the Zillow API you must first register an account with them. Registering with zillow is free, all you have to do is visit the zillow homepage and click on the join link. After that just enter all the information that is being asked. Once registered go to the API registration page and enter the necessary information:

![Register][http://wern-ancheta.com/images/posts/2014-03-20-getting-started-with-zillow-api/api-signup.png]

Once that’s done zillow will email you the API details. All you need here is the value for the Zillow Web Services Identification (ZWSID).

## TOC: 
* [getZestimate](#getZestimate)
* [getSearchResults](#getSearchResults)
* [getChart](#getChart)
* [getComps](#getComps)
* [getDeepComps](#getDeepComps)
* [getDeepSearchResults](#getDeepSearchResults)
* [getUpdatedPropertyDetails](#getUpdatedPropertyDetails)
* [getRegionChildren](#getRegionChildren)
* [getRateSummary](#getRateSummary)
* [getMonthlyPayments](#getMonthlyPayments)
* [calculateMonthlyPaymentsAdvanced](#calculateMonthlyPaymentsAdvanced)
 
<a name="getZestimate"/>
## Zillow.getZestimate
The GetZestimate API will only surface properties for which a Zestimate exists.

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid         | Number     | The Zillow Property ID for the property for which to obtain information. The parameter type is an integer.
| rentzestimate| String     | Return Rent Zestimate information if available (boolean true/false, default: false)

<a name="getSearchResults"/>
## Zillow.getSearchResults
The GetSearchResults API finds a property for a specified address.

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| address      | String     | The address of the property to search. This string should be URL encoded.
| citystatezip | String     | The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.
| rentzestimate| String     | Return Rent Zestimate information if available (boolean true/false, default: false)

<a name="getChart"/>
## Zillow.getChart
The GetChart API generates a URL for an image file that displays historical Zestimates for a specific property

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid         | Number     | The Zillow Property ID for the property; the parameter type is an integer.
| unitType     | String     | A string value that specifies whether to show the percent change, parameter value of 'percent', or dollar change, parameter value of 'dollar'
| width        | Number     | An integer value that specifies the width of the generated image; the value must be between 200 and 600, inclusive.
| height       | Number     | An integer value that specifies the height of the generated image; the value must be between 100 and 300, inclusive.
| chartDuration| String     | The duration of past data that needs to be shown in the chart. Valid values are '1year', '5years' and '10years'. If unspecified, the value defaults to '1year'.

<a name="getComps"/>
## Zillow.getComps
The GetComps API returns a list of comparable recent sales for a specified property. 

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid         | Number     | The Zillow Property ID for the property; the parameter type is an integer.
| count        | Number     | The number of comparable recent sales to obtain (integer between 1 and 25).
| rentzestimate| String     | Return Rent Zestimate information if available (boolean true/false, default: false)

<a name="getDeepComps"/>
## Zillow.getDeepComps
The GetDeepComps API returns a list of comparable recent sales for a specified property.

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid         | Number     | The Zillow Property ID for the property; the parameter type is an integer.
| count        | Number     | The number of comparable recent sales to obtain (integer between 1 and 25).
| rentzestimate| String     | Return Rent Zestimate information if available (boolean true/false, default: false)

<a name="getDeepSearchResults"/>
## Zillow.getDeepSearchResults
The GetDeepSearchResults API finds a property for a specified address.

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| address      | String     | The address of the property to search. This string should be URL encoded.
| citystatezip | String     | The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.
| rentzestimate| String     | Return Rent Zestimate information if available (boolean true/false, default: false)

<a name="getUpdatedPropertyDetails"/>
## Zillow.getUpdatedPropertyDetails
For a specified property, the GetUpdatedPropertyDetails API returns all of the home facts that have been edited by the home's owner or agent. 

| Field| Type       | Description
|------|------------|----------
| zwsId| credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid | Number     | The Zillow Property ID for the property; the parameter type is an integer.

<a name="getRegionChildren"/>
## Zillow.getRegionChildren
For a specified region, the GetRegionChildren API returns a list of subregions with the following information: Subregion Type, Region IDs, Region Names, URL to Corresponding Zillow Page (only for cities and neighborhoods), Latitudes and Longitudes

| Field    | Type       | Description
|----------|------------|----------
| zwsId    | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| regionId | String     | The regionId of the region to retrieve subregions from.
| state    | String     | The state of the region to retrieve subregions from.
| county   | String     | The county of the region to retrieve subregions from.
| city     | String     | The city of the region to retrieve subregions from.
| childtype| String     | The type of subregions to retrieve (available types: state, county, city, zipcode, and neighborhood).

<a name="getRateSummary"/>
## Zillow.getRateSummary
The GetRateSummary API returns the current rates per loan type — as well as rates from a week ago — from Zillow Mortgage Marketplace. 

| Field| Type       | Description
|------|------------|----------
| zwsId| credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| state| String     | The state for which to return average mortgage rates. Two-letter state abbreviations should be used (AK, AL, AR, AZ, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, DC, WI, WV, WY). If omitted, national average mortgage rates are returned.

<a name="getMonthlyPayments"/>
## Zillow.getMonthlyPayments
For a specific loan amount, the GetMonthlyPayments API returns the estimated monthly payment that includes principal and interest based on today's mortgage rate.

| Field      | Type       | Description
|------------|------------|----------
| zwsId      | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| price      | String     | The price of the property for which monthly payment data will be calculated.
| down       | String     | The percentage of the total property price that will be placed as a down payment. If omitted, a 20% down payment is assumed. If the down payment is less than 20%, a monthly private mortgage insurance amount is specified for each returned loan type.
| dollarsdown| String     | The dollar amount that will be placed as a down payment. This amount will be used for the down payment if the 'down' parameter is omitted. If the down payment is less than 20% of the purchase price, a monthly private mortgage insurance amount is specified for each returned loan type.
| zip        | String     | The ZIP code in which the property is located. If omitted, monthly property tax and hazard insurance data will not be returned.

<a name="calculateMonthlyPaymentsAdvanced"/>
## Zillow.calculateMonthlyPaymentsAdvanced
The CalculateMonthlyPaymentsAdvanced API returns the estimated monthly payment, total payment, and amortization table for a given loan amount. It includes detailed monthly payment breakdown including taxes and insurance, as well as payment totals over the life of the loan.

| Field       | Type       | Description
|-------------|------------|----------
| zwsId       | credentials| The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| price       | String     | The price of the property for which monthly payment data will be calculated.
| down        | String     | The percentage of the total property price that will be placed as a down payment. If omitted, a 20% down payment is assumed. If the down payment is less than 20%, a monthly private mortgage insurance amount is specified for each returned loan type.
| amount      | String     | The requested loan amount. This field is not necessary if passing in a price. If used, we assume at least a 20% down payment and will not include PMI.
| rate        | String     | The annual interest rate for the loan. If no rate is passed, we use the current 30 year fixed rate from Zillow Mortgage Marketplace. 
| schedule    | String     | The type of amortization schedule to return in the result set. If omitted, no table will be returned. Options: `yearly`, `monthly`, `both`, `none`
| terminmonths| String     | The term of the loan in months. If omitted, a 360 month term is assumed. 
| propertytax | String     | The annual property tax amount in dollars. If omitted, the property tax will be estimated by Zillow. (Note that estimate requires zip parameter.)    
| hazard      | String     | The annual hazard insurance in dollars. If omitted, the hazard insurance will be estimated by Zillow. (Note that estimate requires zip parameter.)   
| pmi         | String     | The monthly Private Mortgage Insurance in dollars. If omitted, the PMI will be estimated by Zillow.  
| hoa         | String     | The annual home owners' association dues. If omitted, it will be assumed to be $0.
| zip         | String     | The ZIP code in which the property is located. If omitted, property tax and hazard insurance data cannot be estimated by Zillow. 

