// @flow

import * as React from "react";
import Head from "react-helmet";
import {
    BodyRenderer,
    textRenderer,
    Link,
    withPhenomicApi, query
} from "@phenomic/preset-react-app/lib/client";



const DocBody = (
    { isLoading, doc } /*: { isLoading: boolean, post: Object }*/
) => (
        <div>
            {isLoading && <ActivityIndicator />}
            {!isLoading &&
                doc && (
                    <React.Fragment>
                        <div className="body-render">
                            <BodyRenderer>
                                {doc.body}
                            </BodyRenderer>
                        </div>
                    </React.Fragment>
                )}
        </div>
    );

export default DocBody
