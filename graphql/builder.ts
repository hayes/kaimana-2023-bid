import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import SimpleObjects from '@pothos/plugin-simple-objects';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { resolvers } from 'graphql-scalars';
import { db } from '../lib/db';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    ID: {
      Input: string;
      Output: string;
    };
    DateTime: {
      Input: Date;
      Output: Date;
    };
  };
}>({
  prisma: {
    client: db,
  },
  plugins: [PrismaPlugin, SimpleObjects],
});

builder.addScalarType('DateTime', resolvers.DateTime, {});
