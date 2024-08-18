const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "./customers.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const customerProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const customers = [
  {
    id: 1824541,
    name: "User1",
    email: "user1@gmail.com",
    creditScore: 750,
  },
  {
    id: 2715455,
    name: "User2",
    email: "user2@gmail.com",
    creditScore: 800,
  },
];

server.addService(customerProto.CustomerService.service, {
  getAll: (call, callback) => {
    callback(null, { customers });
  },
  get: (call, callback) => {},
  insert: (call, callback) => {},
  update: (call, callback) => {},
  remove: (call, callback) => {},
});

server.bindAsync(
  "127.0.0.1:30043",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.log("ERROR starting grpc server: ", err);
    } else {
      server.start();
      console.log("GRPC is running on port: ", port);
    }
  }
);
