import React from 'react';
import type { Service, NavLink } from './types.ts';

const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const CircleStackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);

const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.625a6.01 6.01 0 00-1.5 11.625zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM9.75 12a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM9.75 15a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
    </svg>
);


const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.25h4.5v7.5h-4.5z" />
    </svg>
);

const PresentationChartLineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1.5-1.5m1.5 1.5l1.5-1.5m-1.5 1.5V3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v1.5" />
    </svg>
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0112 3c2.251 0 4.39.623 6.28 1.718l.28.141a12.034 12.034 0 013.43 3.43l.142.28A11.959 11.959 0 0121 12c0 2.251-.623 4.39-1.718 6.28l-.141.28a12.034 12.034 0 01-3.43 3.43l-.28.142A11.959 11.959 0 0112 21c-2.251 0-4.39-.623-6.28-1.718l-.28-.141a12.034 12.034 0 01-3.43-3.43l-.142-.28A11.959 11.959 0 013 12c0-2.251.623 4.39 1.718-6.28l.141-.28A12.034 12.034 0 018.17 4.832l.28-.142A11.96 11.96 0 0112 3z" />
    </svg>
);


export const NAV_LINKS: NavLink[] = [
  { id: 'services', label: 'Serviços' },
  { id: 'about', label: 'Sobre Nós' },
  { id: 'contact', label: 'Contato' },
];

export const SERVICES: Service[] = [
  {
    icon: <ChartBarIcon className="w-12 h-12" />,
    title: 'Business Intelligence',
    description: 'Criamos dashboards interativos e relatórios que transformam dados brutos em visualizações claras para tomada de decisões rápidas e assertivas.',
  },
  {
    icon: <CircleStackIcon className="w-12 h-12" />,
    title: 'Engenharia de Dados',
    description: 'Desenvolvemos e otimizamos pipelines de dados robustos e escaláveis (ETL/ELT), garantindo que seus dados estejam sempre acessíveis e confiáveis.',
  },
  {
    icon: <LightBulbIcon className="w-12 h-12" />,
    title: 'Análise Preditiva',
    description: 'Utilizamos técnicas estatísticas e de machine learning para prever tendências futuras, comportamentos de clientes e otimizar resultados de negócio.',
  },
    {
    icon: <CpuChipIcon className="w-12 h-12" />,
    title: 'Modelagem e IA',
    description: 'Implementamos modelos de Inteligência Artificial personalizados para resolver desafios complexos, como sistemas de recomendação, detecção de fraudes e mais.',
  },
  {
    icon: <PresentationChartLineIcon className="w-12 h-12" />,
    title: 'Consultoria Estratégica',
    description: 'Ajudamos sua empresa a definir uma estratégia de dados sólida, identificando as melhores ferramentas e práticas para uma cultura data-driven.',
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12" />,
    title: 'Governança de Dados',
    description: 'Estabelecemos políticas e processos para garantir a qualidade, segurança e conformidade dos seus dados, maximizando seu valor e minimizando riscos.',
  },
];
