import urllib
from pymongo import MongoClient
from sklearn import preprocessing
from kmodes.kmodes import KModes
import _pickle as pickle
import numpy as np
import pandas as pd
pd.set_option('display.max_colwidth', 500)


class ML:

    def cluster_response(self, category):
        client = MongoClient("mongodb+srv://ravindu:pass_123@saas-sca.cvklg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        db = client["saas_sca"]
        collection = db[category]
    
        df = pd.DataFrame(list(collection.find({})))
        print(df.head())

        df_copy = df.copy()
        del df['_id']

        df.shape
        df.describe()
        df.info()
        df.isnull().sum()*100/df.shape[0] # Checking for null values

        # Label Encoding process
        df.replace(np.nan, 'notapplicable', inplace=True)
        le = preprocessing.LabelEncoder()
        df = df.apply(le.fit_transform)

        # KModes Clustering - Cluster number is decided based on the trainning data derived values
        k_value_mapper_for_clusters = {
            "CatAGov": 3,
            "CatAOps": 4,
            "CatBGov": 3,
            "CatBOps": 3,
            "CatCGov": 3,
            "CatCOps": 5,
            "CatDGov": 4,
            "CatDOps": 4
        }

        k = k_value_mapper_for_clusters.get(category)

        # KModes with Cao Initialization
        km_cao = KModes(n_clusters=k, init = "Cao", n_init = 1, verbose=1)
        fit_clusters_cao = km_cao.fit_predict(df)

        df['Predicted_Cluster'] = fit_clusters_cao

        response_cluster = df['Predicted_Cluster'].tail(1).values

        return response_cluster