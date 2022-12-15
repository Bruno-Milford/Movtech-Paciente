export class Hospitalization {
  codInternacao: number;
  codPaciente: number;
  paciente: string;
  nascimento: Date;
  maePaciente: string;
  dataEntradaInternacao: Date;
  dataSaidaInternacao: Date;
  cns: string;
  clinicaMedica: string;
  localizacao: string;
  leito: string;
  centroCusto: string;
  hipoteseDiagnostica: string;
  medico: string;
  crm: string;
  diagnostico: string;
  situacao: string;

  constructor(codInternacao: number, codPaciente: number, paciente: string, nascimento: Date, maePaciente: string,
    dataEntradaInternacao: Date, dataSaidaInternacao: Date,  cns: string, clinicaMedica: string, localizacao: string,
    leito: string, centroCusto: string, hipoteseDiagnostica: string,
    medico: string, crm: string, diagnostico: string, situiacao: string) {
      this.codInternacao = codInternacao;
      this.codPaciente = codPaciente;
      this.paciente = paciente;
      this.nascimento = nascimento;
      this.maePaciente = maePaciente;
      this.dataEntradaInternacao = dataEntradaInternacao;
      this.dataSaidaInternacao = dataSaidaInternacao;
      this.cns = cns;
      this.clinicaMedica = clinicaMedica;
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
