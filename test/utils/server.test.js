const app = "./../../app/lib/server.js";
const request = require("supertest");

describe("Unit test for Server", () => {
    test("Get '/v1/explorer", (done) => {
        request(app)
            .get("localhost:3000/v1/explorer/")
            .expect(200)
            .expect((res) => {
                expect(res.body).toBe("hola");
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    // test("2.- GET /v1/explorer/mission", (done) => {
    //     request(app)
    //         .get("/launchX")
    //         .expect(200)
    //         .expect((res) => {
    //             console.log(res.text);
    //             expect(res.text).toBe("launchX");
    //         })
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             return done;
    //         });
    // });
});
