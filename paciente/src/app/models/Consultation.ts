export class Consultation {
  // Paciente
  codPaciente: number;
  nomePaciente: string;
  nomeMaePaciente: string;
  cpfPaciente: string;
  rgPaciente: string;
  endereco: string;
  celular: string;
  email: string;
  observacao: string;

  // Internação
  dataEntradaInternacao: Date;
  dataSaidaInternacao: Date;
  ClinicaMedica: string;
  localizacao: string;
  leito: string;
  centroCusto: string;
  medico: string;
  crm: string;

  constructor(codPaciente: number, nomePaciente: string, nomeMaePaciente: string, cpfPaciente: string,
    rgPaciente: string, endereco: string, celular: string, email: string, observacao: string, dataEntradaInternacao: Date,
    dataSaidaInternacao: Date, ClinicaMedica: string, localizacao: string, leito: string, centroCusto: string,
    medico: string, crm: string) {
      this.codPaciente = codPaciente;
      this.nomePaciente = nomePaciente;
      this.nomeMaePaciente = nomeMaePaciente;
      this.cpfPaciente = cpfPaciente;
      this.rgPaciente = rgPaciente;
      this.endereco = endereco;
      this.celular = celular;
      this.email = email;
      this.observacao = observacao;
      this.dataEntradaInternacao = dataEntradaInternacao;
      this.dataSaidaInternacao = dataSaidaInternacao;
      this.ClinicaMedica = ClinicaMedica;
      this.localizacao = localizacao;
      this.leito = leito;
      this.centroCusto = centroCusto;
      this.medico = medico;
      this.crm = crm;
  }
}
