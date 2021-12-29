import request  from "supertest";
import { expect } from "chai";
import createServer from "server";

const app = createServer();

describe("/user routes", function(){
    it("/user response with 200", function(done){
    request(app).get("/user").expect(200, done)
    })
})
