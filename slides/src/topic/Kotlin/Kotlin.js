import React from 'react';

import { Deck, Slide, Heading } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';

import Cover from './Cover';
import Syllabus from './Syllabus';
import NullSafety from './NullSafety/NullSafety';
import Relation from './NullSafety/Relation';
import CollectionOperation from './CollectionOperation/CollectionOperation';
import ImmutableCollection from './ImmutableCollection/ImmutableCollection';
import Singleton from './Singleton/Singleton';
import Variance from './Variance/Variance';
import JavaImmutable from './Immutability/JavaImmutable';
import Delegation from './Delegation/Delegation';
import TemplateCode from './TemplateCode/TemplateCode';
import JavaTemplateCode from './TemplateCode/JavaTemplateCode';
import KotlinDataClass from './TemplateCode/KotlinDataClass';
import Item16Quote from './Delegation/Item16Quote';
import Composition from './Delegation/Composition';
import KotlinDelegation from './Delegation/KotlinDelegation';
import BoundedWildcards from './Variance/BoundedWildcards';
import Item28Quote from './Variance/Item28Quote';
import KotlinSupplier from './Variance/KotlinSupplier';
import KotlinVariance from './Variance/KotlinVariance';
import Item15Quote from './Immutability/Item15Quote';
import KotlinImmutable from './Immutability/KotlinImmutable';

const theme = createTheme({
  primary: 'black',
  secondary: 'wheat',
}, {
  primary: 'Helvetica',
});

const controls = process.env.NODE_ENV === 'production';
const progress = process.env.NODE_ENV === 'production'
  ? 'pacman'
  : 'none';

const Kotlin = () => (
  <Deck
    transition={['fade']}
    transitionDuration={500}
    theme={theme}
    progress={progress}
    controls={controls}
  >
    <Slide><Heading>Kotlin</Heading></Slide>
    {Cover()}
    {Syllabus()}
    <Slide><Heading size={2} textColor="wheat" fit={false}>Less Bug</Heading></Slide>
    {NullSafety()}
    {Relation()}
    {ImmutableCollection()}
    <Slide><Heading size={2} textColor="wheat" fit={false}>Less Code</Heading></Slide>
    {TemplateCode()}
    {JavaTemplateCode()}
    {KotlinDataClass()}
    {Delegation()}
    {Item16Quote()}
    {Composition()}
    {KotlinDelegation()}
    <Slide><Heading size={2} textColor="wheat" fit={false}>Higher Readability</Heading></Slide>
    {Variance()}
    {BoundedWildcards()}
    {Item28Quote()}
    {KotlinSupplier()}
    {KotlinVariance()}
    {Singleton()}
    <Slide><Heading size={2} textColor="wheat" fit={false}>Better Coding Experience</Heading></Slide>
    {Item15Quote()}
    {JavaImmutable()}
    {KotlinImmutable()}
    {CollectionOperation()}
  </Deck>
);

export default Kotlin;

