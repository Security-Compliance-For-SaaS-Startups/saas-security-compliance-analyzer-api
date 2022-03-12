// Rename the file to config.js

config = {};

config.mongodb = {};
config.category = {};
config.apis = {};

config.mongodb.connectionString = "{SET YOUR DB CONN STRING}"
config.mongodb.centralDB = "saas_sca";
config.mongodb.collections = {};

config.apis.clusteringServiceEndpoint = "{SET CLUSTERING SERVICE ENDPOINT}";

config.mongodb.collections.CatAGov = "CatAGov";
config.mongodb.collections.CatAOps = "CatAOps";
config.mongodb.collections.CatBGov = "CatBGov";
config.mongodb.collections.CatBOps = "CatBOps";
config.mongodb.collections.CatCGov = "CatCGov";
config.mongodb.collections.CatCOps = "CatCOps";
config.mongodb.collections.CatDGov = "CatDGov";
config.mongodb.collections.CatDOps = "CatDOps";

config.category.CatAGov = "CatAGov";
config.category.CatAOps = "CatAOps";
config.category.CatBGov = "CatBGov";
config.category.CatBOps = "CatBOps";
config.category.CatCGov = "CatCGov";
config.category.CatCOps = "CatCOps";
config.category.CatDGov = "CatDGov";
config.category.CatDOps = "CatDOps";

// Cluster Insights
config.category.CatAGovBestInsight = "Compliant in SaaS - Identity Management Governance related controls. Low risk of security incidents related to the governance side of the identity management controls within SaaS application.";
config.category.CatAGovMediumInsight = "Not compliant with mandatory controls required in the SaaS - Identity Management Governance section and lack complete compliance. Medium to high risk of security incidents related to the governance side of the identity management controls within SaaS application. There is room for improvement in the Identity Management Governance side to better compliance and security.";
config.category.CatAGovWorstInsight = "Not compliant in SaaS – Identity Management Governance related controls. Critical risk of security incidents related to the governance side of the identity management controls within SaaS applications. Considerable effort is required to improve compliance to Identity Management Governance controls.";
config.category.CatAOpsBestInsight = "Compliant in SaaS - Identity Management Operations related controls. Low risk of security incidents related to the operations side of the identity management controls within SaaS application.";
config.category.CatAOpsMediumInsight = "Not compliant with mandatory controls required in the SaaS - Identity Management Operations section and complete lack compliance. Medium to high risk of security incidents related to the operations side of the identity management controls within SaaS application. There is room for improvement in the Identity Management Operations side to better compliance and security.";
config.category.CatAOpsWorstInsight = "Not compliant in SaaS – Identity Management Operations related controls. Critical risk of security incidents related to the operations side of the identity management controls within SaaS application. Considerable effort is required to improve compliance to Identity Management Operations controls.";
config.category.CatBGovBestInsight = "Compliant in SaaS - Metastructure Governance related controls. Low risk of security incidents related to the governance side of the metastructure controls within SaaS application.";
config.category.CatBGovMediumInsight = "";
config.category.CatBGovWorstInsight = "Not compliant in SaaS – Metastructure Governance related controls. Critical/ high risk of security incidents related to the operations side of the metastructure controls within SaaS application. Considerable effort is required to improve compliance with Metastructure Operations controls.";
config.category.CatBOpsBestInsight = "Compliant in SaaS - Metastructure Operations related controls. Low risk of security incidents related to the operations side of the metastructure within SaaS application.";
config.category.CatBOpsMediumInsight = "Not compliant with mandatory controls required in the SaaS - Metastructure Operations section and lack complete compliance. Medium to high risk of security incidents related to the operations side of the metastructure controls within SaaS application. There is room for improvement in the Metastructure Operations side to better compliance and security.";
config.category.CatBOpsWorstInsight = "Not compliant in SaaS – Metastructure Operations related controls. Critical risk of security incidents related to the operations side of the metastructure controls within SaaS application. Considerable effort is required to improve compliance with Metastructure Operations controls.";
config.category.CatCGovBestInsight = "Compliant in SaaS - Applistructure & Infostructure Governance related controls. Low risk of security incidents related to the governance side of the Applistructure & Infostructure controls within SaaS application.";
config.category.CatCGovMediumInsight = "Not compliant with mandatory controls required in the SaaS - Applistructure & Infostructure Governance section and complete lack compliance. Medium to high risk of security incidents related to the governance side of the Applistructure & Infostructure controls within SaaS application. There is room for improvement in the Applistructure & Infostructure Governance side to better compliance and security.";
config.category.CatCGovWorstInsight = "Not compliant in SaaS – Applistructure & Infostructure Governance related controls. Critical risk of security incidents related to your SaaS application's Applistructure & Infostructure area. Considerable effort is required to improve compliance to Applistructure & Infostructure Governance controls.";
config.category.CatCOpsBestInsight = "Compliant in SaaS - Applistructure & Infostructure Operations related controls. Low risk of security incidents related to the operations side of the Applistructure & Infostructure controls within SaaS application.";
config.category.CatCOpsMediumInsight = "Not compliant with mandatory controls required in the SaaS - Applistructure & Infostructure Operations section and complete lack compliance. Medium to high risk of security incidents related to the operations side of the Applistructure & Infostructure controls within SaaS application. There is room for improvement in the Applistructure & Infostructure Operations side to better compliance and security.";
config.category.CatCOpsWorstInsight = "Not compliant in SaaS – Applistructure & Infostructure Operations related controls. Critical risk of security incidents related to your SaaS application's Applistructure & Infostructure area. Considerable effort is required to improve compliance to Applistructure & Infostructure Operations controls.";
config.category.CatDGovBestInsight = "Compliant in SaaS - Infrastructure Governance related controls. Low risk of security incidents related to the governance side of the infrastructure controls within SaaS application.";
config.category.CatDGovMediumInsight = "Not compliant with mandatory controls required in the SaaS - Infrastructure Governance section and lack complete compliance. Medium to high risk of security incidents related to the governance side of the Infrastructure controls within SaaS application. There is room for improvement in the Infrastructure Governance side to better compliance and security.";
config.category.CatDGovWorstInsight = "Not compliant in SaaS – Infrastructure Governance related controls. Critical risk of security incidents related to the Infrastructure area of your SaaS application. Considerable effort is required to improve compliance to Infrastructure Governance controls.";
config.category.CatDOpsBestInsight = "Compliant in SaaS - Infrastructure Operations related controls. Low risk of security incidents related to the operations side of the infrastructure controls within SaaS application.";
config.category.CatDOpsMediumInsight = "Not compliant with mandatory controls required in the SaaS - Infrastructure Operations section and complete lack compliance. Medium to high risk of security incidents related to the operations side of the Infrastructure controls within SaaS application. There is room for improvement in the Infrastructure Operations side to better compliance and security.";
config.category.CatDOpsWorstInsight = "Not compliant in SaaS – Infrastructure operations related controls. Critical risk of security incidents related to the Infrastructure area of your SaaS application. Considerable effort is required to improve compliance to Infrastructure Operations controls.";

// Cluster Recommendations
config.category.CatAGovBestRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3.A - Assessing the SaaS cloud Identity Management section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatAGovMediumRecommendation = "Recommend referring Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3.A - Assessing the SaaS cloud Identity Management section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatAGovWorstRecommendation = "Highly recommend referring to Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3.A - Assessing the SaaS cloud Identity Management section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatAOpsBestRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3.A - Assessing the SaaS cloud Identity Management section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatAOpsMediumRecommendation = "Recommend referring Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3.A - Assessing the SaaS cloud Identity Management section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatAOpsWorstRecommendation = "Highly recommend referring to Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3.A - Assessing the SaaS cloud Identity Management section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatBGovBestRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. B - Assessing the SaaS cloud Metastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatBGovMediumRecommendation = "";
config.category.CatBGovWorstRecommendation = "Highly recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. B - Assessing the SaaS cloud Metastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatBOpsBestRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. B - Assessing the SaaS cloud Metastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatBOpsMediumRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. B - Assessing the SaaS cloud Metastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatBOpsWorstRecommendation = "Highly recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. B - Assessing the SaaS cloud Metastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatCGovBestRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. C - Assessing the SaaS cloud Applistructure & Infostructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatCGovMediumRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. C - Assessing the SaaS cloud Applistructure & Infostructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatCGovWorstRecommendation = "Highly recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. C - Assessing the SaaS cloud Applistructure & Infostructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatCOpsBestRecommendation = "Recommend referring to Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. C - Assessing the SaaS cloud Applistructure & Infostructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatCOpsMediumRecommendation = "Recommend referring to Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. C - Assessing the SaaS cloud Applistructure & Infostructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatCOpsWorstRecommendation = "Highly recommend referring to Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. C - Assessing the SaaS cloud Applistructure & Infostructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatDGovBestRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. D - Assessing the SaaS cloud Infrastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatDGovMediumRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. D - Assessing the SaaS cloud Infrastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatDGovWorstRecommendation = "Highly recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. D - Assessing the SaaS cloud Infrastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatDOpsBestRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. D - Assessing the SaaS cloud Infrastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatDOpsMediumRecommendation = "Recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. D - Assessing the SaaS cloud Infrastructure section, following the proposed 5 step subprocess, and going through the process annually.";
config.category.CatDOpsWorstRecommendation = "Highly recommend referring to the Enhanced Cloud Security and Compliance Reference Model for Emerging SaaS Cloud Systems consuming public cloud services - 3. D - Assessing the SaaS cloud Infrastructure section, following the proposed 5 step subprocess, and going through the process annually.";

module.exports = config;