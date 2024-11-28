import React from 'react';
import { Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon, ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const ProfileScreen = () => {
  const {colorMode}=useColorMode();
    return (
      <ScrollView>
    <Center flex={1} bg={colorMode=== 'light' ? 'coolGray.100':'coolGray.800'} p={4}>
<Box
        bg={colorMode === 'light' ? 'white' : 'coolGray.700'}
        rounded="lg"
        shadow={6}
        width="90%"
        maxWidth="400px"
        p={6}
      >
        <VStack space={4} alignItems="center">
          <Avatar
            size="xl"
            source={{
              uri: './assets/images/deathkid.png',
            }}
          />
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="md" color="gray.500">
            john.doe@example.com
          </Text>
          <Text fontSize="sm" color="gray.400" italic>
            Desarrollador de aplicaciones móviles
          </Text>
        </VStack>

        <Divider my={4} />

        <VStack space={2}>
          <Text fontSize="md" fontWeight="medium">
            Bio
          </Text>
          <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
            Apasionado por el desarrollo de aplicaciones móviles con experiencia en React Native,
            JavaScript y diseño de interfaces de usuario. Siempre dispuesto a aprender y colaborar
            en proyectos desafiantes.
          </Text>
        </VStack>
        <Divider my={4}/>
            <VStack space={2}>
          <Text fontSize="md" fontWeight="medium">
            Habilidades
          </Text>
          <HStack space={2} flexWrap="wrap">
            <Icon as={Ionicons} name="logo-react" size="sm" color={colorMode === 'light' ? 'blue.500' : 'blue.300'} />
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              React Native
            </Text>
            <Icon as={Ionicons} name="logo-javascript" size="sm" color={colorMode === 'light' ? 'yellow.500' : 'yellow.300'} />
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              JavaScript
            </Text>
            <Icon as={Ionicons} name="logo-html5" size="sm" color={colorMode === 'light' ? 'orange.500' : 'orange.300'} />
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              HTML
            </Text>
            <Icon as={Ionicons} name="logo-css3" size="sm" color={colorMode === 'light' ? 'blue.500' : 'blue.300'} />
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              CSS
            </Text>
          </HStack>
          </VStack>

        <Divider my={4} />

        <HStack space={6} justifyContent="center" alignItems="center">
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-linkedin" size="sm" />} colorScheme="blue">
            LinkedIn
          </Button>
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-github" size="sm" />} colorScheme="dark">
            GitHub
          </Button>
          <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="mail-outline" size="sm" />} colorScheme="red">
            Email
          </Button>
        </HStack>

        <Divider my={4} />

        <VStack space={2} alignItems="flex-start">
          <Text fontSize="md" fontWeight="medium">
            Detalles adicionales
          </Text>
          <HStack justifyContent="space-between" width="100%">
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Ubicación
            </Text>
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Ciudad de México, México
            </Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Fecha de nacimiento:
            </Text>
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              13/03/2001
            </Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Idiomas:
            </Text>
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Ingles, Español
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Center>
    </ScrollView>
  );
};

export default ProfileScreen;






