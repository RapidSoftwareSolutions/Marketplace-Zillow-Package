module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
        'package': 'Zillow',
        "tagline": "Zillow API Package",
        "description": "",
        'image': 'http://www.zillowstatic.com/static/images/m/apple-touch-icon.png',
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "zpid",
                    type: "Number",
                    info: "The Zillow Property ID for the property for which to obtain information. The parameter type is an integer.",
                },
                {
                    name: "rentzestimate",
                    type: "String",
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "address",
                    type: "String",
                    info: "The address of the property to search. This string should be URL encoded.",
                },
                {
                    name: "citystatezip",
                    type: "String",
                    info: "The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.",
                },
                {
                    name: "rentzestimate",
                    type: "String",
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "zpid",
                    type: "Number",
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",
                },
                {
                    name: "unitType",
                    type: "String",
                    info: "A string value that specifies whether to show the percent change, parameter value of 'percent', or dollar change, parameter value of 'dollar'",
                },
                {
                    name: "width",
                    type: "Number",
                    info: "An integer value that specifies the width of the generated image; the value must be between 200 and 600, inclusive.",
                },
                {
                    name: "height",
                    type: "Number",
                    info: "An integer value that specifies the height of the generated image; the value must be between 100 and 300, inclusive.",
                },
                {
                    name: "chartDuration",
                    type: "String",
                    info: "The duration of past data that needs to be shown in the chart. Valid values are '1year', '5years' and '10years'. If unspecified, the value defaults to '1year'.",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "zpid",
                    type: "Number",
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",
                },
                {
                    name: "count",
                    type: "Number",
                    info: "The number of comparable recent sales to obtain (integer between 1 and 25).",
                },
                {
                    name: "rentzestimate",
                    type: "String",
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "zpid",
                    type: "Number",
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",
                },
                {
                    name: "count",
                    type: "Number",
                    info: "The number of comparable recent sales to obtain (integer between 1 and 25).",
                },
                {
                    name: "rentzestimate",
                    type: "String",
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "address",
                    type: "String",
                    info: "The address of the property to search. This string should be URL encoded.",
                },
                {
                    name: "citystatezip",
                    type: "String",
                    info: "The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.",
                },
                {
                    name: "rentzestimate",
                    type: "String",
                    info: "Return Rent Zestimate information if available (boolean true/false, default: false)",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "zpid",
                    type: "Number",
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "regionId",
                    type: "String",
                    info: "The regionId of the region to retrieve subregions from.",
                },
                {
                    name: "state",
                    type: "String",
                    info: "The state of the region to retrieve subregions from.",
                },
                {
                    name: "county",
                    type: "String",
                    info: "The county of the region to retrieve subregions from.",
                },
                {
                    name: "city",
                    type: "String",
                    info: "The city of the region to retrieve subregions from.",
                },
                {
                    name: "childtype",
                    type: "String",
                    info: "The type of subregions to retrieve (available types: state, county, city, zipcode, and neighborhood).",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "state",
                    type: "String",
                    info: "The state for which to return average mortgage rates. Two-letter state abbreviations should be used (AK, AL, AR, AZ, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, DC, WI, WV, WY). If omitted, national average mortgage rates are returned.",
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "price",
                    type: "String",
                    info: "The price of the property for which monthly payment data will be calculated."
                },
                {
                    name: "down",
                    type: "String",
                    info: "The percentage of the total property price that will be placed as a down payment. If omitted, a 20% down payment is assumed. If the down payment is less than 20%, a monthly private mortgage insurance amount is specified for each returned loan type."
                },
                {
                    name: "dollarsdown",
                    type: "String",
                    info: "The dollar amount that will be placed as a down payment. This amount will be used for the down payment if the 'down' parameter is omitted. If the down payment is less than 20% of the purchase price, a monthly private mortgage insurance amount is specified for each returned loan type."
                },
                {
                    name: "zip",
                    type: "String",
                    info: "The ZIP code in which the property is located. If omitted, monthly property tax and hazard insurance data will not be returned."
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
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",
                },
                {
                    name: "price",
                    type: "String",
                    info: "The price of the property for which monthly payment data will be calculated."
                },
                {
                    name: "down",
                    type: "String",
                    info: "The percentage of the total property price that will be placed as a down payment. If omitted, a 20% down payment is assumed. If the down payment is less than 20%, a monthly private mortgage insurance amount is specified for each returned loan type."
                },
                {
                    name: "amount",
                    type: "String",
                    info: "The requested loan amount. This field is not necessary if passing in a price. If used, we assume at least a 20% down payment and will not include PMI."
                },
                {
                    name: "rate",
                    type: "String",
                    info: "The annual interest rate for the loan. If no rate is passed, we use the current 30 year fixed rate from Zillow Mortgage Marketplace. "
                },
                {
                    name: "schedule",
                    type: "String",
                    info: "The type of amortization schedule to return in the result set. If omitted, no table will be returned. Options: `yearly`, `monthly`, `both`, `none`"
                },
                {
                    name: "terminmonths",
                    type: "String",
                    info: "The term of the loan in months. If omitted, a 360 month term is assumed. "
                },
                {
                    name: "propertytax",
                    type: "String",
                    info: "The annual property tax amount in dollars. If omitted, the property tax will be estimated by Zillow. (Note that estimate requires zip parameter.)    "
                },
                {
                    name: "hazard",
                    type: "String",
                    info: "The annual hazard insurance in dollars. If omitted, the hazard insurance will be estimated by Zillow. (Note that estimate requires zip parameter.)   "
                },
                {
                    name: "pmi",
                    type: "String",
                    info: "The monthly Private Mortgage Insurance in dollars. If omitted, the PMI will be estimated by Zillow.  "
                },
                {
                    name: "hoa",
                    type: "String",
                    info: "The annual home owners' association dues. If omitted, it will be assumed to be $0."
                },
                {
                    name: "zip",
                    type: "String",
                    info: "The ZIP code in which the property is located. If omitted, property tax and hazard insurance data cannot be estimated by Zillow. "
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
