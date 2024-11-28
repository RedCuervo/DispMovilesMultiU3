import React, { useState, useEffect } from 'react';
import { Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon, Badge, ScrollView, Alert, Progress, Skeleton, Spinner,
  useToast } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const ConnectScreen = () => {

  const { colorMode } = useColorMode();
  const [showAlert, setShowAlert] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const toast = useToast();

  useEffect(() => {
    //Simula la carga de datos del perfil de usuario

    const loadUserData = async () => {
      setLoading(true);
      setProgress(20);

      //Simulación de progreso
      setTimeout(() => setProgress(60), 1000);
      setTimeout(() => setProgress(100), 2000);

      setTimeout(() => {
        setUserData({
          name: "Juan Pérez",
          email: "juan.perez@example.com",
          bio: "Desarrollador de software apasionado por React Native y el desarrollo móvil."
        });
        setLoading(false);
        toast.show({
          title: "Datos cargados",
          status: "success",
          duration:3000,
          description: "El perfil del usuario se ha cargado correctamente.",
          isClosable: true,

        });
      }, 5000);
    };

    loadUserData();
  }, []);

  return(
    <Center flex={1} px={4} bg={colorMode=== 'light' ? 'coolGray.100':'coolGray.800'}>
      <VStack space={4} w="100%">
        {showAlert &&(
          <Alert w="100%" status='error' colorScheme={"error"}
          onClose={() => setShowAlert(false)}
          >
            <Alert.Icon/>
            <Text color={"error.700"}> Hubo un error al cargar los datos</Text>
          </Alert>
        )}

        {/* Simulación de carga de datos */}
        {loading ? (
          <>
          <Text>Cargando perfil del usuario...</Text>
          <Progress value={progress} colorScheme="blue" />
          <Skeleton.Text lines={3} mt={4} />
          <Skeleton mt={2} h="20" />
          <Skeleton mt={2} h="20" />
          <Spinner size="lg" color="blue.500" mt={4} />
          </>
        ) : (
          <>
          {/* Información de usuario */}
          <Box p={4} bg={colorMode === 'light' ? 'white' : 'coolGray.700'} rounded="lg" shadow={1}>
            <Text fontSize="xl" fontWeight="bold" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>{userData.name}</Text>
            <Text color={colorMode === 'light' ? 'muted.400' : 'muted.500'}>{userData.email}</Text>
            <Text mt={2} color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>{userData.bio}</Text>
          </Box>
          
          <Button colorScheme={"danger"} onPress={() => setShowAlert(true)}>Simular error</Button>
          </>
        )}
      </VStack>
    </Center>
  );
};
  export default ConnectScreen;