import DebugUtility from '../Function/DebugUtility';

const NetworkUtils = {

    fetchDatas(adapter, procedure, params) {
        return new Promise((resolve, reject) => {
            DebugUtility.log(adapter, procedure, params);
            try {
                const invocationData = {
                    adapter: adapter,
                    procedure: procedure,
                    parameters: [params]
                };
                WL.Client.invokeProcedure(invocationData, {
                    onSuccess: (response) => {
                        DebugUtility.log(response);
                        resolve(response);
                    },
                    onFailure: (error) => {
                        DebugUtility.log(error);
                        reject(error);
                    }
                });
            } catch (error) {
                DebugUtility.log(error);
                reject(error);
            }
        });
    }

};

export default NetworkUtils;
