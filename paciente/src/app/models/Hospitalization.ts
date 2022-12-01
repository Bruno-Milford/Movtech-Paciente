export class Hospitalization {
  codInternacao: number;
  codPaciente: number;
  Paciente: string;
  Nascimento: Date;
  MaePaciente: string;
  dataEntradaInternacao: Date;
  horaEntradaInternacao: Date;
  dataSaidaInternacao: Date;
  horaSaidaInternacao: Date;
  cns: string;
  ClinicaMedica: string;
  localizacao: string;
  leito: string;
  centroCusto: string;
  hipoteseDiagnostica: string;
  medico: string;
  crm: string;
  diagnostico: string;
  situacao: string;

  constructor(codInternacao: number, codPaciente: number, Paciente: string, Nascimento: Date, MaePaciente: string,
    dataEntradaInternacao: Date, horaEntradaInternacao: Date, dataSaidaInternacao: Date, horaSaidaInternacao: Date,
    cns: string, ClinicaMedica: string, localizacao: string, leito: string, centroCusto: string, hipoteseDiagnostica: string,
    medico: string, crm: string, diagnostico: string, situiacao: string) {
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
      this.diagnostico = diagnostico;
      this.situacao = situiacao;
  }
}
