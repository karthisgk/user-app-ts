const { EventHubProducerClient } = require("@azure/event-hubs");

const connectionString = "Endpoint=sb://userappnamespace.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=VoioyytTZgTU4vYumBuXx/eYlBPMy318JpOkp76LN7w=;EntityPath=userappevent";
const eventHubName = "userappevent";


let sampleData = {
    "resourceType": "Bundle",
    "id": "52b063cf-9da6-481c-a35e-501abb903a2a",
    "meta": {
        "lastUpdated": "2023-02-08T12:29:38.791-05:00"
    },
    "type": "message",
    "timestamp": "2023-02-08T12:29:38.791-05:00",
    "entry": [
        {
            "resource": {
                "resourceType": "MessageHeader",
                "id": "58217bad-1e10-4716-a264-437521af1bf9",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-MessageHeader%7C1.0.0"
                    ]
                },
                "extension": [
                    {
                        "url": "http://ehealthontario.ca/fhir/StructureDefinition/ext-id-message-header",
                        "valueString": "36739a27-0a88-455f-a6c9-13eb45e02efc"
                    }
                ],
                "eventCoding": {
                    "system": "https://ehealthontario.ca/fhir/CodeSystem/message-event-code",
                    "code": "add-service-request",
                    "display": "add-service-request"
                },
                "destination": [
                    {
                        "name": "Test Bayshore HealthCare",
                        "endpoint": "https://webhook.site/7702637f-e719-46bc-b2bb-94d152680b49",
                        "receiver": {
                            "reference": "PractitionerRole/bayshore_healthcare-73632721",
                            "identifier": {
                                "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-referral-target-external-service",
                                "value": "Test"
                            }
                        }
                    }
                ],
                "sender": {
                    "reference": "Organization/cognisant-md"
                },
                "author": {
                    "reference": "PractitionerRole/4b6f5b9f-19fb-42ea-a613-c8ec27eaa3ae"
                },
                "source": {
                    "name": "Ocean",
                    "endpoint": "https://test.cognisantmd.com/svc/fhir/v1/$process-messages"
                },
                "focus": [
                    {
                        "reference": "ServiceRequest/36739a27-0a88-455f-a6c9-13eb45e02efc"
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "ServiceRequest",
                "id": "36739a27-0a88-455f-a6c9-13eb45e02efc",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-ServiceRequest%7C1.0.0"
                    ]
                },
                "identifier": [
                    {
                        "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-ereferral-reference",
                        "value": "36739a27-0a88-455f-a6c9-13eb45e02efc"
                    }
                ],
                "status": "active",
                "intent": "proposal",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "385759002",
                                "display": "HOME_AND_COMMUNITY_CARE"
                            }
                        ]
                    },
                    {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "85901-7",
                                "display": "HOME_AND_COMMUNITY_CARE"
                            }
                        ]
                    }
                ],
                "priority": "routine",
                "orderDetail": [
                    {
                        "coding": [
                            {
                                "display": "Home and Community Care"
                            }
                        ]
                    }
                ],
                "subject": {
                    "reference": "Patient/57ba641e-6795-4795-81da-d079c22c4ae3"
                },
                "authoredOn": "2023-02-08T12:29:38-05:00",
                "requester": {
                    "reference": "PractitionerRole/4b6f5b9f-19fb-42ea-a613-c8ec27eaa3ae"
                },
                "performer": [
                    {
                        "reference": "PractitionerRole/bayshore_healthcare-73632721",
                        "identifier": {
                            "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-referral-target-external-service",
                            "value": "Test"
                        }
                    }
                ],
                "supportingInfo": [
                    {
                        "reference": "DocumentReference/referral-36739a27-0a88-455f-a6c9-13eb45e02efc"
                    },
                    {
                        "reference": "QuestionnaireResponse/5b71e0c6-cc92-428b-945b-7dd78fec8dbb"
                    }
                ],
                "note": [
                    {
                        "authorReference": {
                            "reference": "Practitioner/e409e91b-594d-4403-bf1d-95fc6828014c"
                        },
                        "time": "2023-02-08T12:29:38-05:00",
                        "text": "COVID&nbsp;"
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "Patient",
                "id": "57ba641e-6795-4795-81da-d079c22c4ae3",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-Patient%7C1.0.0"
                    ]
                },
                "identifier": [
                    {
                        "extension": [
                            {
                                "url": "http://ehealthontario.ca/fhir/StructureDefinition/ext-id-health-card-version-code",
                                "valueString": "XX"
                            }
                        ],
                        "use": "official",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/v2/0203/",
                                    "code": "JHN",
                                    "display": "Jurisdictional health number (Canada)"
                                }
                            ]
                        },
                        "system": "https://fhir.infoway-inforoute.ca/NamingSystem/ca-on-patient-hcn",
                        "value": "1547896351"
                    },
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/v2/0203/",
                                    "code": "MR",
                                    "display": "Medical record number"
                                }
                            ]
                        },
                        "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-external-patient-reference"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "text": "Darling Mary",
                        "family": "Mary",
                        "given": [
                            "Darling"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "613-222-2222",
                        "use": "home"
                    },
                    {
                        "system": "phone",
                        "value": "613-222-3333",
                        "use": "mobile"
                    },
                    {
                        "system": "email",
                        "value": "test@test.com",
                        "use": "home"
                    },
                    {
                        "system": "phone",
                        "value": "613-222-4444",
                        "use": "work"
                    }
                ],
                "gender": "male",
                "birthDate": "1965-07-15",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home",
                        "type": "postal",
                        "line": [
                            "1345 MAIN ST"
                        ],
                        "city": "NEWVILLE",
                        "state": "ON",
                        "postalCode": "K0K 3T0"
                    },
                    {
                        "use": "home",
                        "type": "postal"
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "PractitionerRole",
                "id": "4b6f5b9f-19fb-42ea-a613-c8ec27eaa3ae",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-PractitionerRole%7C1.0.0"
                    ]
                },
                "identifier": [
                    {
                        "use": "official",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/v2/0203/",
                                    "code": "LN",
                                    "display": "License Number"
                                }
                            ]
                        },
                        "system": "http://infoway-inforoute.ca/fhir/NamingSystem/ca-on-license-physician"
                    }
                ],
                "active": true,
                "practitioner": {
                    "reference": "Practitioner/e409e91b-594d-4403-bf1d-95fc6828014c"
                },
                "code": [
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "display": "Other"
                            }
                        ]
                    }
                ],
                "location": [
                    {
                        "reference": "Location/f514ecc9-9dae-4c2d-9072-140894d1c423"
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "905-601-6447",
                        "use": "work"
                    },
                    {
                        "system": "fax",
                        "value": "905-601-6447",
                        "use": "work"
                    },
                    {
                        "system": "email",
                        "value": "rvenugopal@bayshore.ca",
                        "use": "work"
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "Practitioner",
                "id": "e409e91b-594d-4403-bf1d-95fc6828014c",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-Practitioner%7C1.0.0"
                    ]
                },
                "identifier": [
                    {
                        "use": "official",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/v2/0203/",
                                    "code": "LN",
                                    "display": "License Number"
                                }
                            ]
                        },
                        "system": "http://infoway-inforoute.ca/fhir/NamingSystem/ca-on-license-physician"
                    },
                    {
                        "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-practitioner-username",
                        "value": "rvenugopal"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "family": "Calhoon",
                        "given": [
                            "Cody"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "905-601-6447",
                        "use": "work"
                    },
                    {
                        "system": "fax",
                        "value": "905-601-6447",
                        "use": "work"
                    },
                    {
                        "system": "email",
                        "value": "rvenugopal@bayshore.ca",
                        "use": "work"
                    }
                ],
                "address": [
                    {
                        "use": "work",
                        "type": "both",
                        "line": [
                            "3873 Central Pkwy"
                        ],
                        "city": "Mississauga",
                        "state": "ON",
                        "postalCode": "L5L 5S1"
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "Location",
                "id": "f514ecc9-9dae-4c2d-9072-140894d1c423",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-Location%7C1.0.0"
                    ]
                },
                "status": "active",
                "mode": "instance",
                "telecom": [
                    {
                        "system": "phone",
                        "value": "905-601-6447",
                        "use": "work"
                    },
                    {
                        "system": "fax",
                        "value": "905-601-6447",
                        "use": "work"
                    },
                    {
                        "system": "email",
                        "value": "rvenugopal@bayshore.ca",
                        "use": "work"
                    }
                ],
                "address": {
                    "use": "work",
                    "type": "physical",
                    "line": [
                        "3873 Central Pkwy"
                    ],
                    "city": "Mississauga",
                    "state": "ON",
                    "postalCode": "L5L 5S1"
                }
            }
        },
        {
            "resource": {
                "resourceType": "PractitionerRole",
                "id": "bayshore_healthcare-73632721",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-PractitionerRole%7C1.0.0"
                    ]
                },
                "identifier": [
                    {
                        "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-referral-target-reference",
                        "value": "bayshore_healthcare-73632721"
                    },
                    {
                        "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-site-number",
                        "value": "2998"
                    },
                    {
                        "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-referral-target-external-service",
                        "value": "Test"
                    }
                ],
                "active": true,
                "specialty": [
                    {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "85901-7"
                            }
                        ]
                    },
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "385759002"
                            }
                        ]
                    },
                    {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "70004-7",
                                "display": "Remote Patient Monitoring"
                            }
                        ]
                    },
                    {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "716101005",
                                "display": "Remote Patient Monitoring"
                            }
                        ]
                    }
                ],
                "location": [
                    {
                        "reference": "Location/967de930-f8c7-4970-ab5c-0a078aa7155d"
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "Location",
                "id": "967de930-f8c7-4970-ab5c-0a078aa7155d",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-Location%7C1.0.0"
                    ]
                },
                "status": "active",
                "mode": "instance",
                "address": {
                    "use": "work",
                    "type": "physical",
                    "line": [
                        "2101 Hadwen Rd"
                    ],
                    "city": "Mississauga",
                    "state": "ON",
                    "postalCode": "L5K 2L3"
                },
                "position": {
                    "longitude": -79.65538787841797,
                    "latitude": 43.52297592163086
                }
            }
        },
        {
            "resource": {
                "resourceType": "DocumentReference",
                "id": "referral-36739a27-0a88-455f-a6c9-13eb45e02efc",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-DocumentReference%7C1.0.0"
                    ]
                },
                "identifier": [
                    {
                        "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-ereferral-reference",
                        "value": "36739a27-0a88-455f-a6c9-13eb45e02efc"
                    }
                ],
                "status": "current",
                "date": "2023-02-08T12:29:38.234-05:00",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://test.cognisantmd.com/svc/fhir/v1/ServiceRequest/36739a27-0a88-455f-a6c9-13eb45e02efc/$letter",
                            "title": "Darling Mary-Fortuna Hospital Center-2023-02-08.pdf",
                            "creation": "2023-02-08T12:29:38-05:00"
                        }
                    }
                ]
            }
        },
        {
            "resource": {
                "resourceType": "QuestionnaireResponse",
                "id": "5b71e0c6-cc92-428b-945b-7dd78fec8dbb",
                "meta": {
                    "profile": [
                        "http://ehealthontario.ca/fhir/StructureDefinition/ca-on-eReferral-profile-QuestionnaireResponse%7C1.0.0"
                    ]
                },
                "identifier": {
                    "system": "https://test.cognisantmd.com/svc/fhir/v1/NamingSystem/id-form-reference",
                    "value": "yas_ereferral_form"
                },
                "status": "completed",
                "subject": {
                    "reference": "Patient/57ba641e-6795-4795-81da-d079c22c4ae3"
                },
                "author": {
                    "reference": "Practitioner/e409e91b-594d-4403-bf1d-95fc6828014c"
                },
                "item": [
                    {
                        "linkId": "mainSection"
                    },
                    {
                        "linkId": "questionnaire"
                    },
                    {
                        "linkId": "item50509332",
                        "answer": [
                            {
                                "valueString": "COVID"
                            }
                        ]
                    },
                    {
                        "linkId": "item92959233"
                    }
                ]
            }
        }
    ]
}

async function main() {

    // Create a producer client to send messages to the event hub.
    const producer = new EventHubProducerClient(connectionString, eventHubName);

    // Prepare a batch of three events.
    const batch = await producer.createBatch();
    Array.from({ length: 2 }, (_, i) => {
        batch.tryAdd({
            body: {sampleData: "data"}
        });
    })

    // Send the batch to the event hub.
    await producer.sendBatch(batch);

    // Close the producer client.
    await producer.close();

    console.log("A batch of three events have been sent to the event hub");
}

main().catch((err) => {
    console.log("Error occurred: ", err);
});