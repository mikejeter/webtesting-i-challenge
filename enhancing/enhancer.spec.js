const enhancer = require('./enhancer.js');
// test away!


const vehicle = {
    name: "Dodge Charger",
    durability: 78,
    enhancement: 13
};

describe("Enhancing vehicle", () => {
    describe("Fixing vehicle", () => {
        it("vehicle is at 100%", () => {
            expect(enhancer.repair(vehicle)).toEqual({ ...vehicle, durability: 100 });
        });
    });

    describe("You have successfully enhanced your vehicle", () => {
        it("Vehicle has been enhanced 20", () => {
            expect(enhancer.succeed(vehicle)).toEqual({ ...vehicle, enhancement: vehicle.enhancement + 1 });
        });
        it("Vehicle is already enhanced", () => {
            expect(enhancer.succeed({ ...vehicle, enhancement: 20 })).toEqual({ ...vehicle, enhancement: 20 });
        });
    });

    describe("You have failed enhancing your vehicle", () => {
        it("Low enhancer has failed", () => {
            expect(enhancer.fail(vehicle)).toEqual({ ...vehicle, durability: vehicle.durability - 5 });
        });
        it("Mid enhancer has failed", () => {
            expect(enhancer.fail({ ...vehicle, enhancement: 15 })).toEqual({ ...vehicle, enhancement: 15, durability: vehicle.durability - 10 });
        })
        it("High enhancer has failed", () => {
            expect(enhancer.fail({ ...vehicle, enhancement: 17 })).toEqual({ ...vehicle, enhancement: 16, durability: vehicle.durability - 10 });
        });
    });
});