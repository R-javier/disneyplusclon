import {Box, Stack, Button, Flex, Spacer, Divider, Text, Link} from "@chakra-ui/react";
import React from "react";
import {Image} from "@chakra-ui/react";

import bgImage from "./assets/avengers.jpg";

import "./App.css";

function App() {
  return (
    <Box height="140%">
      <Box bg="black" h="14vh" w="100vw">
        <Stack stackSize="100px">
          <Flex alignItems="center">
            <Link>
              <Image
                boxSize="90px"
                ml="5"
                src="https://prod-static.disney-plus.net/us-west-2/disneyPlus/app/builds/b39613c72ed6128ffa8a35d0e8ccfad43109e19f/disneyPlus/app/assets/images/logo.svg"
              />
            </Link>
            <Spacer />
            <Button
              backgroundColor="blue.500"
              color="white"
              colorScheme="blue"
              fontWeight="bold"
              letterSpacing="2px"
              m="3"
              pb={6}
              pt={5}
              size="md"
              textTransform="uppercase"
            >
              Obtener Disney +
            </Button>
            <Button
              color="white"
              colorScheme="blue"
              fontWeight="bold"
              letterSpacing="2px"
              mr="12"
              pb={6}
              pt={5}
              size="md"
              textTransform="uppercase"
              variant="outline"
            >
              Iniciar Sesion
            </Button>
          </Flex>
        </Stack>
      </Box>

      <Box
        alt="Avengers"
        bgImg={`url(${bgImage})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        objectFit="contain"
      >
        <Stack>
          <Flex>
            <Image
              m="12"
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8AA26FBC92304DE0DFD519C8E34316C00D58779AE81A0378278294F5AABFECAC/scale?width=1440&aspectRatio=1.78"
              w={300}
            />
          </Flex>
        </Stack>
        <Flex>
          <Image
            ml="12"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DBEE39BD73F05F00CF59B78F9C6C4E58D0DE8E484553CDB6009775B24F886D4C/scale?width=240"
            w={9}
          />

          <Image
            ml="2"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD4912EB883B7CCB847EB9C62E1FC853D547CAF7DF940B9086AE35AFAD0848AB/scale?width=240"
            w={9}
          />
          <Image
            ml="2"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FAE63AC7AC11C27C949E1856CF188BF09FC20EA52AEA3B65B43C24EEB5F29BFD/scale?width=240"
            w={9}
          />
          <Flex alignItems="center" color="white" fontSize="sm" ml="2">
            <p>2019 3h 4min</p>
          </Flex>
        </Flex>
        <Box color="white" fontSize="sm" ml="12" pt="1">
          <p>Ciencia ficción, Fantasía, Superhéroes, Acción y aventura</p>
          <Flex>
            <Button
              backgroundColor="blue.500"
              borderRadius="4"
              color="white"
              colorScheme="blue"
              fontWeight="bold"
              letterSpacing="2px"
              ml="0"
              mt="7"
              p="7"
              size="md"
              textTransform="uppercase"
            >
              Obtener Disney +
            </Button>
            <Button
              borderRadius="4"
              color="white"
              colorScheme="white"
              fontWeight="bold"
              letterSpacing="2px"
              m="1"
              ml="6"
              mt="7"
              p="7"
              size="md"
              textTransform="uppercase"
              variant="outline"
            >
              Trailer
            </Button>
          </Flex>
        </Box>
        <Box color="white" fontSize="xl" fontWeight="bold" ml="12" pt="1">
          <h2>
            En el final épico de la Saga del Infinito, los Avengers se enfrentan a Thanos. Cuando{" "}
            <br />
            eventos devastadores arrasan con la mitad de la población mundial y fracturan sus filas,
            <br />
            los héroes restantes luchan por avanzar. Pero deben unirse para restaurar el orden y la{" "}
            <br />
            armonía en el universo y traer de vuelta a sus seres queridos.
          </h2>
        </Box>
        <Box>
          <Button
            color="white"
            colorScheme="white"
            fontWeight="bold"
            letterSpacing="2px"
            ml="7"
            mt="5"
            size="lg"
            variant="ghost"
          >
            DETALLES
          </Button>
          <Divider m="4" ml="12" w="80%" />
          <Stack
            color="white"
            direction="row"
            fontSize="xl"
            fontWeight="400"
            ml="12"
            pt="1"
            spacing={8}
          >
            <h2>
              En el final épico de la Saga del Infinito, los Avengers se enfrentan <br />
              al villano más poderoso del universo, Thanos. Cuando eventos
              <br /> devastadores arrasan con la mitad de la población mundial y <br /> fracturan
              sus filas, los héroes restantes luchan por avanzar. Pero <br />
              deben unirse para restaurar el orden y la armonía en el universo y <br />
              traer de vuelta a sus seres queridos. Algunas secuencias o <br /> patrones de luces
              intermitentes pueden afectar a espectadores <br /> fotosensibles.
            </h2>
            <Stack spacing={0}>
              <Text color="gray.400" fontSize="sm" pt={2}>
                Duración:
              </Text>
              <Text fontSize="md" fontWeight="600" letterSpacing={0.5}>
                3 h 4 min
              </Text>
              <Text color="gray.400" fontSize="sm" pt={2}>
                Fecha de estreno:
              </Text>
              <Text fontSize="md" fontWeight="600">
                2019
              </Text>
              <Text color="gray.400" fontSize="sm" pt={2}>
                Género:
              </Text>
              <Text fontSize="md" fontWeight="600">
                Ciencia ficción, Fantasía, Superhéroes, <br /> Acción y aventura
              </Text>
              <Text color="gray.400" fontSize="sm" pt={2}>
                Clasificación:
              </Text>
              <Image
                pt={1}
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DBEE39BD73F05F00CF59B78F9C6C4E58D0DE8E484553CDB6009775B24F886D4C/scale?width=240"
                w={9}
              />
            </Stack>
            <Stack pb={12} spacing={0}>
              <Text color="gray.400" fontSize="sm" pt={2}>
                Dirigido por:
              </Text>
              <Text fontSize="md" fontWeight="600" pb={3}>
                Anthony Russo, Joe Russo
              </Text>
              <Text color="gray.400" fontSize="sm" pt={2}>
                Elenco:
              </Text>
              <Stack direction="column" fontSize="md" fontWeight="600" pb={2} spacing={0}>
                <Text>Robert Downey Jr.</Text>
                <Text>Chris Evans</Text>
                <Text>Mark Ruffalo</Text>
                <Text>Chris Hemsworth</Text>
                <Text>Scarlett Johansson</Text>
                <Text>Jeremy Renner</Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Stack alignItems="center" backgroundColor="black" spacing={0}>
        <Link>
          <Image
            height="100%"
            paddingY={3}
            src="https://prod-static.disney-plus.net/us-west-2/disneyPlus/app/builds/b39613c72ed6128ffa8a35d0e8ccfad43109e19f/disneyPlus/app/assets/images/logo.svg"
            width={89}
          />
        </Link>
        <Stack direction="row" fontSize="sm" fontWeight="light" spacing={6}>
          <Link isExternal>
            <Text>Política de privacidad</Text>
          </Link>
          <Link>
            <Text>Acuerdo de suscripción</Text>
          </Link>
          <Link>
            <Text>Ayuda</Text>
          </Link>
          <Link>
            <Text>Dispositivos compatibles</Text>
          </Link>
        </Stack>
        <Stack direction="row" fontSize="sm" fontWeight="light" paddingY={4} spacing={6}>
          <Link>
            <Text>Acerca de Disney +</Text>
          </Link>
          <Link>
            <Text>Publicidad personalizada</Text>
          </Link>
        </Stack>
        <Stack fontSize="sm" fontWeight="light">
          <Text>
            Disney+ es un servicio por suscripción de pago, su contenido está sujeto a
            disponibilidad. <br /> El servicio Disney+ es comercializado por The Walt Disney Company
            (Argentina) S.A., Tucumán <br /> 1, Piso 4º (C1049AAA) Ciudad Autónoma de Buenos Aires,
            Argentina y número de CUIT 30- <br />
            63984459-1.
          </Text>
        </Stack>
        <Stack fontSize="sm" fontWeight="light" paddingBottom={6}>
          <Text>© Disney. Todos los derechos reservados.</Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
