"use strict";
import app_test from "./index.mjs";
import serverless from "serverless-http";

export const hello = serverless(app_test);
