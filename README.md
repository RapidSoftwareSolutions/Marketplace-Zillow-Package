[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Zillow/functions?utm_source=RapidAPIGitHub_ZillowFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Zillow Package
Show updated real estate and mortgage content in real time.

* Domain: [zillow.com](https://www.zillow.com/)
* Credentials: zwsId

## How to get credentials: 
In order to start making requests to the Zillow API you must first register an account with them. Registering with zillow is free, all you have to do is visit the zillow homepage and click on the join link. After that just enter all the information that is being asked. Once registered go to the API registration page and enter the necessary information:

![Register](http://wern-ancheta.com/images/posts/2014-03-20-getting-started-with-zillow-api/api-signup.png)

Once that’s done zillow will email you the API details. All you need here is the value for the Zillow Web Services Identification (ZWSID).
 

## Zillow.getZestimate
The GetZestimate API will only surface properties for which a Zestimate exists.

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid         | Number     | Required: The Zillow Property ID for the property for which to obtain information. The parameter type is an integer.
| rentzestimate| String     | Optional: Return Rent Zestimate information if available (boolean true/false, default: false)


## Zillow.getSearchResults
The GetSearchResults API finds a property for a specified address.

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| address      | String     | Required: The address of the property to search.
| citystatezip | String     | Required: The city+state combination and/or ZIP code for which to search. Note that giving both city and state is required. Using just one will not work.
| rentzestimate| String     | Optional: Return Rent Zestimate information if available (boolean true/false, default: false)


## Zillow.getChart
The GetChart API generates a URL for an image file that displays historical Zestimates for a specific property

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid         | Number     | Required: The Zillow Property ID for the property; the parameter type is an integer.
| unitType     | String     | Required: A string value that specifies whether to show the percent change, parameter value of 'percent', or dollar change, parameter value of 'dollar'
| width        | Number     | Optional: An integer value that specifies the width of the generated image; the value must be between 200 and 600, inclusive.
| height       | Number     | Optional: An integer value that specifies the height of the generated image; the value must be between 100 and 300, inclusive.
| chartDuration| String     | Optional: The duration of past data that needs to be shown in the chart. Valid values are '1year', '5years' and '10years'. If unspecified, the value defaults to '1year'.


## Zillow.getComps
The GetComps API returns a list of comparable recent sales for a specified property. 

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid         | Number     | Required: The Zillow Property ID for the property; the parameter type is an integer.
| count        | Number     | Required: The number of comparable recent sales to obtain (integer between 1 and 25).
| rentzestimate| String     | Optional: Return Rent Zestimate information if available (boolean true/false, default: false)


## Zillow.getDeepComps
The GetDeepComps API returns a list of comparable recent sales for a specified property.

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid         | Number     | Required: The Zillow Property ID for the property; the parameter type is an integer.
| count        | Number     | Required: The number of comparable recent sales to obtain (integer between 1 and 25).
| rentzestimate| String     | Optional: Return Rent Zestimate information if available (boolean true/false, default: false)


## Zillow.getDeepSearchResults
The GetDeepSearchResults API finds a property for a specified address.

| Field        | Type       | Description
|--------------|------------|----------
| zwsId        | credentials| Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| address      | String     | Required: The address of the property to search. 
| citystatezip | String     | Required: The city+state combination and/or ZIP code for which to search. Note that giving both city and state is required. Using just one will not work.
| rentzestimate| String     | Optional: Return Rent Zestimate information if available (boolean true/false, default: false)


## Zillow.getUpdatedPropertyDetails
For a specified property, the GetUpdatedPropertyDetails API returns all of the home facts that have been edited by the home's owner or agent. 

| Field| Type       | Description
|------|------------|----------
| zwsId| credentials| Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| zpid | Number     | Required: The Zillow Property ID for the property; the parameter type is an integer.


## Zillow.getRegionChildren
For a specified region, the GetRegionChildren API returns a list of subregions with the following information: Subregion Type, Region IDs, Region Names, URL to Corresponding Zillow Page (only for cities and neighborhoods), Latitudes and Longitudes

| Field    | Type       | Description
|----------|------------|----------
| zwsId    | credentials| Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   
| regionId | String     | Optional: The regionId of the region to retrieve subregions from. At least regionId or state is required
| state    | String     | Optional: The state of the region to retrieve subregions from. At least regionId or state is required
| county   | String     | Optional: The county of the region to retrieve subregions from.
| city     | String     | Optional: The city of the region to retrieve subregions from.
| childtype| String     | Optional: The type of subregions to retrieve (available types: state, county, city, zipcode, and neighborhood).
