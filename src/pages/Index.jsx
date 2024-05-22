import { useState, useEffect } from "react";
import { Container, Text, VStack, IconButton, Code, Box, Alert, AlertIcon } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const [ip, setIp] = useState(null);
  const [showIp, setShowIp] = useState(false);
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    // Fetch the IP address
    const allowedIps = ["fe80::c012:99bf:4962:6be3", "192.168.8.61", "2a02:9b0:4005:c9e4:fd67:8458:7a4:38c5", "2a02:9b0:4005:c9e4:60b8:d02f:3b15:2a37", "fda2:cd9b:9e3b:6300:f8d7:69e1:2c7d:c9ce", "fda2:cd9b:9e3b:6300:60b8:d02f:3b15:2a37"];

    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
        if (!allowedIps.includes(data.ip)) {
          setIsAllowed(false);
        }
      })
      .catch((error) => console.error("Error fetching IP:", error));
  }, []);

  const toggleShowIp = () => {
    setShowIp(!showIp);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {!isAllowed && (
          <Alert status="error">
            <AlertIcon />
            Unauthorized IP address detected!
          </Alert>
        )}
        <Text fontSize="2xl">IP Address Tracker</Text>
        <Box display="flex" alignItems="center">
          <Text mr={2}>Your IP Address:</Text>
          {showIp ? <Code>{ip}</Code> : <Code>********</Code>}
          <IconButton aria-label="Toggle IP visibility" icon={showIp ? <FaEyeSlash /> : <FaEye />} onClick={toggleShowIp} ml={2} />
        </Box>
        <Text fontSize="sm" mt={4}>
          {`{"v":"5.7.5","fr":60,"ip":0,"op":90,"w":64,"h":64,"nm":"check","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"check","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[32,32,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[33.333,33.333,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[9.25,-6],[-2.75,6],[-9.25,-0.5]],"c":false}},"nm":"Path 1","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.461],"y":[1]},"o":{"x":[0.466],"y":[0]},"t":44,"s":[100]},{"t":90,"s":[0]}]},"e":{"a":0,"k":100},"o":{"a":0,"k":0},"m":1,"nm":"Trim Paths 1","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.6470588235294118,0.49411764705882355,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":3},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[350,350]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"check","bm":0,"hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"circle","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[32,32,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[33.333,33.333,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[53,53]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","hd":false},{"ty":"tm","s":{"a":0,"k":0},"e":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.66],"y":[0]},"t":0,"s":[0]},{"t":77,"s":[100]}]},"o":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.66],"y":[0]},"t":0,"s":[-360]},{"t":77,"s":[0]}]},"m":1,"nm":"Trim Paths 1","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.6470588235294118,0.49411764705882355,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":3},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[300,300]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"circle","bm":0,"hd":false}],"ip":0,"op":90,"st":0,"bm":0}],"markers":[]}`}
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
