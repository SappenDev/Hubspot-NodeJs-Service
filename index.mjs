import {Client} from "@hubspot/api-client";
// import dotenv from 'dotenv';
// dotenv.config();

const hubspotClient = new Client({accessToken: process.env.HUBSPOT_API_KEY})

export const handler = async (event) => {

    try {
    const body = event.body instanceof Object ? event.body : JSON.parse(event.body);

    const responseData = await hubspotClient.crm.contacts.basicApi.create(body);

    return {
        statusCode: 201, // Código de estado HTTP exitoso
        body: responseData.body, // Cuerpo de la respuesta
    };

    }catch(error) {
        return {
            statusCode: error.code, // Código de estado HTTP de error interno del servidor
            body: JSON.stringify({ error: error.body.message }), // Cuerpo de la respuesta de error
        };
    }

}