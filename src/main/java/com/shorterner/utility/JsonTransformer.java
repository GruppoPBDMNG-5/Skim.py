package com.shorterner.utility;

import com.google.gson.Gson;
import spark.Response;
import spark.ResponseTransformer;

import java.util.HashMap;

/**
 * Created by Vincenzo on 14/07/2015.
 */
public class JsonTransformer implements ResponseTransformer {
    private Gson gson = new Gson();

    @Override
    public String render(Object o) throws Exception {
        if (o instanceof Response) {
            return gson.toJson(new HashMap<>());
        }
        return gson.toJson(o);
    }
}
