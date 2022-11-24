export class Movement {
  codMovimentacao: string;
  codPacienteMov: string;
  nomePacienteMov: string;
  dataNasciemtoMov: Date;
  nomeMaePacienteMov: string;
  dataMovimentacao: string;
  horaMovimentacao: string;
  motivo: string;
  leitoMov: string;
  centroCustoMov: string;
  medicoMov: string;
  crmMov: string;

  constructor(codMovimentacao: string, codPacienteMov: string, nomePacienteMov: string, dataNasciemtoMov: Date,
    nomeMaePacienteMov: string, dataMovimentacao: string, horaMovimentacao: string, motivo: string,
    leitoMov: string, centroCustoMov: string, medicoMov: string, crmMov: string) {
      this.codMovimentacao = codMovimentacao;
      this.codPacienteMov = codPacienteMov;
      this.nomePacienteMov = nomePacienteMov;
      this.dataNasciemtoMov = dataNasciemtoMov;
      this.nomeMaePacienteMov = nomeMaePacienteMov;
      this.dataMovimentacao = dataMovimentacao;
      this.horaMovimentacao = horaMovimentacao;
      this.motivo = motivo;
      this.leitoMov = leitoMov;
      this.centroCustoMov = centroCustoMov;
      this.medicoMov = medicoMov;
      this.crmMov = crmMov;
  }
}
