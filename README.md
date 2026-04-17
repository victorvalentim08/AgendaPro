# 📅 AgendaPRO - Sistema de Agendamento

## 🚀 Sobre o Projeto
O AgendaPRO é um sistema completo de agendamentos. [cite_start]A base do sistema foi configurada utilizando React com Vite[cite: 340], visando uma estrutura simples, escalável e pronta para produção.

## 🛠️ Tecnologias Utilizadas
* **Front-end:** React + Vite
* **Back-end/Database:** Supabase

## 📂 Arquitetura do Projeto
[cite_start]A arquitetura profissional de pastas foi criada para separar responsabilidades de forma clara[cite: 341]:
* `src/components/`: Componentes visuais e reutilizáveis da interface.
* `src/hooks/`: Lógica reutilizável da aplicação.
* `src/services/`: Comunicação e requisições para o banco de dados.

## 🗄️ Banco de Dados
[cite_start]O banco de dados back-end foi configurado no Supabase e as três tabelas principais já estão prontas para receber dados[cite: 342]:
* **`users`**: Guarda as informações e controle de usuários (clientes e administradores).
* **`time_slots`**: Funciona como um "estoque" dos horários disponíveis.
* **`appointments`**: Registra os agendamentos realizados, cruzando o usuário com o horário escolhido.

---
*Projeto em desenvolvimento*