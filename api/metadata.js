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
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",

                },
                {
                    name: "zpid",
                    type: "Number",
                    required: false,
                    info: "The Zillow Property ID for the property for which to obtain information. The parameter type is an integer.",

                },
                {
                    name: "rentzestimate",
                    type: "String",
                    required: false,
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
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",

                },
                {
                    name: "address",
                    type: "String",
                    required: true,
                    info: "The address of the property to search. This string should be URL encoded.",

                },
                {
                    name: "citystatezip",
                    type: "String",
                    required: true,
                    info: "The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.",

                },
                {
                    name: "rentzestimate",
                    type: "String",
                    required: false,
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
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",

                },
                {
                    name: "zpid",
                    type: "Number",
                    required: true,
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",

                },
                {
                    name: "unitType",
                    type: "String",
                    required: true,
                    info: "A string value that specifies whether to show the percent change, parameter value of 'percent', or dollar change, parameter value of 'dollar'",

                },
                {
                    name: "width",
                    type: "Number",
                    required: false,
                    info: "An integer value that specifies the width of the generated image; the value must be between 200 and 600, inclusive.",

                },
                {
                    name: "height",
                    type: "Number",
                    required: false,
                    info: "An integer value that specifies the height of the generated image; the value must be between 100 and 300, inclusive.",

                },
                {
                    name: "chartDuration",
                    type: "String",
                    required: false,
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
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",

                },
                {
                    name: "zpid",
                    type: "Number",
                    required: true,
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",

                },
                {
                    name: "count",
                    type: "Number",
                    required: true,
                    info: "The number of comparable recent sales to obtain (integer between 1 and 25).",

                },
                {
                    name: "rentzestimate",
                    type: "String",
                    required: false,
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
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",

                },
                {
                    name: "zpid",
                    type: "Number",
                    required: true,
                    info: "The Zillow Property ID for the property; the parameter type is an integer.",

                },
                {
                    name: "count",
                    type: "Number",
                    required: true,
                    info: "The number of comparable recent sales to obtain (integer between 1 and 25).",

                },
                {
                    name: "rentzestimate",
                    type: "String",
                    required: false,
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
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",

                },
                {
                    name: "address",
                    type: "String",
                    required: true,
                    info: "The address of the property to search. This string should be URL encoded.",

                },
                {
                    name: "citystatezip",
                    type: "String",
                    required: true,
                    info: "The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. Using just one will not work.",

                },
                {
                    name: "rentzestimate",
                    type: "String",
                    required: false,
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
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",

                },
                {
                    name: "zpid",
                    type: "Number",
                    required: true,
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
                    required: true,
                    info: "The Zillow Web Service Identifier. Each subscriber to Zillow Web Services is uniquely identified by an ID sequence and every request to Web services requires this ID.   ",

                },
                {
                    name: "regionId",
                    type: "String",
                    required: false,
                    info: "The regionId of the region to retrieve subregions from.",

                },
                {
                    name: "state",
                    type: "String",
                    required: false,
                    info: "The state of the region to retrieve subregions from.",

                },
                {
                    name: "county",
                    type: "String",
                    required: false,
                    info: "The county of the region to retrieve subregions from.",

                },
                {
                    name: "city",
                    type: "String",
                    required: false,
                    info: "The city of the region to retrieve subregions from.",

                },
                {
                    name: "childtype",
                    type: "String",
                    required: false,
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
    ]})
};
