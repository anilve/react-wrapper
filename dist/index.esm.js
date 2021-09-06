import React, { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

/**
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Status;
(function (Status) {
    Status["LOADING"] = "LOADING";
    Status["FAILURE"] = "FAILURE";
    Status["SUCCESS"] = "SUCCESS";
})(Status || (Status = {}));
/**
 * A component to wrap the loading of the Google Maps JavaScript API.
 *
 * ```
 * import { Wrapper } from '@googlemaps/react-wrapper';
 *
 * const MyApp = () => (
 * 	<Wrapper apiKey={'YOUR_API_KEY'}>
 * 		<MyMapComponent />
 * 	</Wrapper>
 * );
 * ```
 *
 * @param props
 */
const Wrapper = ({ children, render, callback, ...options }) => {
    const [status, setStatus] = useState(Status.LOADING);
    useEffect(() => {
        const loader = new Loader(options);
        const setStatusAndExecuteCallback = (status) => {
            if (callback)
                callback(status, loader);
            setStatus(status);
        };
        setStatusAndExecuteCallback(Status.LOADING);
        loader.load().then(() => setStatusAndExecuteCallback(Status.SUCCESS), () => setStatusAndExecuteCallback(Status.FAILURE));
    }, []);
    if (status === Status.SUCCESS && children)
        return React.createElement(React.Fragment, null, children);
    if (render)
        return render(status);
    return React.createElement(React.Fragment, null);
};

export { Status, Wrapper };
//# sourceMappingURL=index.esm.js.map