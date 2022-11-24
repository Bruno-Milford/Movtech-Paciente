export class Hospitalization {
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

  constructor(codInternacao: string, codPaciente: string, Paciente: string, Nascimento: Date, MaePaciente: string,
    dataEntradaInternacao: Date, horaEntradaInternacao: string, dataSaidaInternacao: Date, horaSaidaInternacao: string,
    cns: string, ClinicaMedica: string, localizacao: string, leito: string, centroCusto: string, hipoteseDiagnostica: string,
    medico: string, crm: string, diaginostico: string, situiacao: string) {
      this.codInternacao = codInternacao;
      this.codPaciente = codPaciente;
      this.Paciente = Paciente;
      this.Nascimento = Nascimento;
      this.MaePaciente = MaePaciente;
      this.dataEntradaInternacao = dataEntradaInternacao;
      this.horaEntradaInternacao = horaEntradaInternacao;
      this.dataSaidaInternacao = dataSaidaInternacao;
      this.horaSaidaInternacao = horaSaidaInternacao;
      this.cns = cns;
      this.ClinicaMedica = ClinicaMedica;
      this.localizacao = localizacao;
      this.leito = leito;
      this.centroCusto = centroCusto;
      this.hipoteseDiagnostica = hipoteseDiagnostica;
      this.medico = medico;
      this.crm = crm;
      this.diaginostico = diaginostico;
      this.situiacao = situiacao;
  }
}
