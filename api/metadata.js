module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
        'package': 'Zillow',
        "tagline": "Zillow API Package",
        "description": "Show updated real estate and mortgage content in real time.",
        'image': 'http://www.zillowstatic.com/static/images/m/apple-touch-icon.png',
        'keywords': ["API", "estate", "geo-target", "geo-targeted", "geolocal", "geotarget", "geotargeted", "housing", "listing", "lists", "real"],
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-zillow-package',
        'accounts': {
            'domain': 'zillow.com',
            'credentials': [
                'zwsId',
            ]
        },
        'blocks': [{
            "name":"getZestimate",
            "description": "The GetZestimate API will only surface properties for which a Zestimate exists.",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "zpid",
                    type: "Number",
<<<<<<< HEAD
                    required: false,
                    info: "The Zillow Property ID for the property for which to obtain information. The parameter type is an integer.",
=======
                    info: "Required: The Zillow Property ID for the property for which to obtain information. The parameter type is an integer.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "rentzestimate",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
=======
                    info: "Optional: Return Rent Zestimate information if available (boolean true/false, default: false)",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, 
        {
            "name":"getSearchResults",
            "description": "The GetSearchResults API finds a property for a specified address.",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "address",
                    type: "String",
<<<<<<< HEAD
                    required: true,
                    info: "The address of the property to search. This string should be URL encoded.",
=======
                    info: "Required: The address of the property to search. This string should be URL encoded.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "citystatezip",
                    type: "String",
<<<<<<< HEAD
                    required: true,
                    info: "The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.",
=======
                    info: "Required: The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "rentzestimate",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
=======
                    info: "Optional: Return Rent Zestimate information if available (boolean true/false, default: false)",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getChart",
            "description": "The GetChart API generates a URL for an image file that displays historical Zestimates for a specific property",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "zpid",
                    type: "Number",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",
=======
                    info: "Required: The Zillow Property ID for the property; the parameter type is an integer.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "unitType",
                    type: "String",
<<<<<<< HEAD
                    required: true,
                    info: "A string value that specifies whether to show the percent change, parameter value of 'percent', or dollar change, parameter value of 'dollar'",
=======
                    info: "Required: A string value that specifies whether to show the percent change, parameter value of 'percent', or dollar change, parameter value of 'dollar'",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "width",
                    type: "Number",
<<<<<<< HEAD
                    required: false,
                    info: "An integer value that specifies the width of the generated image; the value must be between 200 and 600, inclusive.",
=======
                    info: "Optional: An integer value that specifies the width of the generated image; the value must be between 200 and 600, inclusive.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "height",
                    type: "Number",
<<<<<<< HEAD
                    required: false,
                    info: "An integer value that specifies the height of the generated image; the value must be between 100 and 300, inclusive.",
=======
                    info: "Optional: An integer value that specifies the height of the generated image; the value must be between 100 and 300, inclusive.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "chartDuration",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The duration of past data that needs to be shown in the chart. Valid values are '1year', '5years' and '10years'. If unspecified, the value defaults to '1year'.",
=======
                    info: "Optional: The duration of past data that needs to be shown in the chart. Valid values are '1year', '5years' and '10years'. If unspecified, the value defaults to '1year'.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getComps",
            "description": "The GetComps API returns a list of comparable recent sales for a specified property. ",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "zpid",
                    type: "Number",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",
=======
                    info: "Required: The Zillow Property ID for the property; the parameter type is an integer.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "count",
                    type: "Number",
<<<<<<< HEAD
                    required: true,
                    info: "The number of comparable recent sales to obtain (integer between 1 and 25).",
=======
                    info: "Required: The number of comparable recent sales to obtain (integer between 1 and 25).",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "rentzestimate",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
=======
                    info: "Optional: Return Rent Zestimate information if available (boolean true/false, default: false)",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, 
        {
            "name":"getDeepComps",
            "description": "The GetDeepComps API returns a list of comparable recent sales for a specified property.", 
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "zpid",
                    type: "Number",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",
=======
                    info: "Required: The Zillow Property ID for the property; the parameter type is an integer.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "count",
                    type: "Number",
<<<<<<< HEAD
                    required: true,
                    info: "The number of comparable recent sales to obtain (integer between 1 and 25).",
=======
                    info: "Required: The number of comparable recent sales to obtain (integer between 1 and 25).",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "rentzestimate",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
=======
                    info: "Optional: Return Rent Zestimate information if available (boolean true/false, default: false)",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getDeepSearchResults",
            "description": "The GetDeepSearchResults API finds a property for a specified address.",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "address",
                    type: "String",
<<<<<<< HEAD
                    required: true,
                    info: "The address of the property to search. This string should be URL encoded.",
=======
                    info: "Required: The address of the property to search. This string should be URL encoded.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "citystatezip",
                    type: "String",
<<<<<<< HEAD
                    required: true,
                    info: "The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.",
=======
                    info: "Required: The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "rentzestimate",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
=======
                    info: "Optional: Return Rent Zestimate information if available (boolean true/false, default: false)",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, 
        {
            "name":"getUpdatedPropertyDetails",
            "description": "For a specified property, the GetUpdatedPropertyDetails API returns all of the home facts that have been edited by the home's owner or agent. ",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "zpid",
                    type: "Number",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",
=======
                    info: "Required: The Zillow Property ID for the property; the parameter type is an integer.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getRegionChildren",
            "description": "For a specified region, the GetRegionChildren API returns a list of subregions with the following information: Subregion Type, Region IDs, Region Names, URL to Corresponding Zillow Page (only for cities and neighborhoods), Latitudes and Longitudes",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "regionId",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The regionId of the region to retrieve subregions from.",
=======
                    info: "Optional: The regionId of the region to retrieve subregions from. At least regionId or state is required",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "state",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The state of the region to retrieve subregions from.",
=======
                    info: "Optional: The state of the region to retrieve subregions from. At least regionId or state is required",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "county",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The county of the region to retrieve subregions from.",
=======
                    info: "Optional: The county of the region to retrieve subregions from.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "city",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The city of the region to retrieve subregions from.",
=======
                    info: "Optional: The city of the region to retrieve subregions from.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "childtype",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The type of subregions to retrieve (available types: state, county, city, zipcode, and neighborhood).",
=======
                    info: "Optional: The type of subregions to retrieve (available types: state, county, city, zipcode, and neighborhood).",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, 
        {
            "name":"getRateSummary",
            "description": "The GetRateSummary API returns the current rates per loan type — as well as rates from a week ago — from Zillow Mortgage Marketplace. ",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "state",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The state for which to return average mortgage rates. Two-letter state abbreviations should be used (AK, AL, AR, AZ, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, DC, WI, WV, WY). If omitted, national average mortgage rates are returned.",
=======
                    info: "Optional: The state for which to return average mortgage rates. Two-letter state abbreviations should be used (AK, AL, AR, AZ, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, DC, WI, WV, WY). If omitted, national average mortgage rates are returned.",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getMonthlyPayments",
            "description": "For a specific loan amount, the GetMonthlyPayments API returns the estimated monthly payment that includes principal and interest based on today's mortgage rate.",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "price",
                    type: "String",
<<<<<<< HEAD
                    required: true,
                    info: "The price of the property for which monthly payment data will be calculated."
=======
                    info: "Required: The price of the property for which monthly payment data will be calculated."
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "down",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The percentage of the total property price that will be placed as a down payment. If omitted, a 20% down payment is assumed. If the down payment is less than 20%, a monthly private mortgage insurance amount is specified for each returned loan type."
=======
                    info: "Optional: The percentage of the total property price that will be placed as a down payment. If omitted, a 20% down payment is assumed. If the down payment is less than 20%, a monthly private mortgage insurance amount is specified for each returned loan type."
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "dollarsdown",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The dollar amount that will be placed as a down payment. This amount will be used for the down payment if the 'down' parameter is omitted. If the down payment is less than 20% of the purchase price, a monthly private mortgage insurance amount is specified for each returned loan type."
=======
                    info: "Optional: The dollar amount that will be placed as a down payment. This amount will be used for the down payment if the 'down' parameter is omitted. If the down payment is less than 20% of the purchase price, a monthly private mortgage insurance amount is specified for each returned loan type."
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "zip",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The ZIP code in which the property is located. If omitted, monthly property tax and hazard insurance data will not be returned."
=======
                    info: "Optional: The ZIP code in which the property is located. If omitted, monthly property tax and hazard insurance data will not be returned."
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"calculateMonthlyPaymentsAdvanced",
            "description": "The CalculateMonthlyPaymentsAdvanced API returns the estimated monthly payment, total payment, and amortization table for a given loan amount. It includes detailed monthly payment breakdown including taxes and insurance, as well as payment totals over the life of the loan.",
            "args":[
                {
                    name: "zwsId",
                    type: "credentials",
<<<<<<< HEAD
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
=======
                    info: "Required: The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "price",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "Required if no amount. The price of the property for which monthly payment data will be calculated."
=======
                    info: "Optional: The price of the property for which monthly payment data will be calculated. Required if no amount."
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "down",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The percentage of the total property price that will be placed as a down payment. If omitted, a 20% down payment is assumed. If the down payment is less than 20%, a monthly private mortgage insurance amount is specified for each returned loan type."
=======
                    info: "Optional: The percentage of the total property price that will be placed as a down payment. If omitted, a 20% down payment is assumed. If the down payment is less than 20%, a monthly private mortgage insurance amount is specified for each returned loan type."
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "amount",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The requested loan amount. This field is not necessary if passing in a price. If used, we assume at least a 20% down payment and will not include PMI."
=======
                    info: "Optional: The requested loan amount. This field is not necessary if passing in a price. If used, we assume at least a 20% down payment and will not include PMI. Required if no price."
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "rate",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The annual interest rate for the loan. If no rate is passed, we use the current 30 year fixed rate from Zillow Mortgage Marketplace. "
=======
                    info: "Optional: The annual interest rate for the loan. If no rate is passed, we use the current 30 year fixed rate from Zillow Mortgage Marketplace. "
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "schedule",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The type of amortization schedule to return in the result set. If omitted, no table will be returned. Options: `yearly`, `monthly`, `both`, `none`"
=======
                    info: "Optional: The type of amortization schedule to return in the result set. If omitted, no table will be returned. Options: `yearly`, `monthly`, `both`, `none`"
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "terminmonths",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The term of the loan in months. If omitted, a 360 month term is assumed. "
=======
                    info: "Optional: The term of the loan in months. If omitted, a 360 month term is assumed. "
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "propertytax",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The annual property tax amount in dollars. If omitted, the property tax will be estimated by Zillow. (Note that estimate requires zip parameter.)    "
=======
                    info: "Optional: The annual property tax amount in dollars. If omitted, the property tax will be estimated by Zillow. (Note that estimate requires zip parameter.)    "
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "hazard",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The annual hazard insurance in dollars. If omitted, the hazard insurance will be estimated by Zillow. (Note that estimate requires zip parameter.)   "
=======
                    info: "Optional: The annual hazard insurance in dollars. If omitted, the hazard insurance will be estimated by Zillow. (Note that estimate requires zip parameter.)   "
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "pmi",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The monthly Private Mortgage Insurance in dollars. If omitted, the PMI will be estimated by Zillow.  "
=======
                    info: "Optional: The monthly Private Mortgage Insurance in dollars. If omitted, the PMI will be estimated by Zillow.  "
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "hoa",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The annual home owners' association dues. If omitted, it will be assumed to be $0."
=======
                    info: "Optional: The annual home owners' association dues. If omitted, it will be assumed to be $0."
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
                {
                    name: "zip",
                    type: "String",
<<<<<<< HEAD
                    required: false,
                    info: "The ZIP code in which the property is located. If omitted, property tax and hazard insurance data cannot be estimated by Zillow. "
=======
                    info: "Optional: The ZIP code in which the property is located. If omitted, property tax and hazard insurance data cannot be estimated by Zillow. "
>>>>>>> 0f89fd28b1e9fbdf23c6823634bd3dd51fdf200a
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, 
    ]})
};
