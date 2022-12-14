export class Movement {
  codMovimentacao: number;
  codPacienteMov: number;
  codSequencia: number;
  nomePacienteMov: string;
  nomeMaePacienteMov: string;
  dataMovimentacao: Date;
  motivo: string;
  localizacao: string;
  leitoMov: string;
  centroCustoMov: string;
  medicoMov: string;
  crmMov: string;

  constructor(codMovimentacao: number, codPacienteMov: number, codSequencia: number, nomePacienteMov: string, 
    nomeMaePacienteMov: string, dataMovimentacao: Date, motivo: string, localizacao: string,
    leitoMov: string, centroCustoMov: string, medicoMov: string, crmMov: string) {
      this.codMovimentacao = codMovimentacao;
      this.codPacienteMov = codPacienteMov;
      this.codSequencia = codSequencia;
      this.nomePacienteMov = nomePacienteMov;
      this.nomeMaePacienteMov = nomeMaePacienteMov;
      this.dataMovimentacao = dataMovimentacao;
      this.motivo = motivo;
      this.localizacao = localizacao;
      this.leitoMov = leitoMov;
      this.centroCustoMov = centroCustoMov;
      this.medicoMov = medicoMov;
      this.crmMov = crmMov;
  }
}
