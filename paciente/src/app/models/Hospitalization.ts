export default interface Hospitalization {
  codInternacao: string;
  codPaciente: string;
  Paciente: string;
  Nascimento: Date;
  MaePaciente: string;
  dataEntradaInternacao: Date;
  horaEntradaInternacao: string;
  dataSaidaInternacao: Date;
  horaSaidaInternacao: string;
  cns: string;
  ClinicaMedica: string;
  localizacao: string;
  leito: string;
  centroCusto: string;
  hipoteseDiagnostica: string;
  medico: string;
  crm: string;
  diaginostico: string;
  situiacao: string;
}
