import { ChangeDetectionStrategy, Component, signal, OnInit, computed } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component.spec';



declare const __app_id: string;
declare const __firebase_config: string;
declare function initializeApp(config: any): any;
declare function getAuth(app: any): any;
declare function createUserWithEmailAndPassword(auth: any, email: string, password: string): any;
declare function updateProfile(user: any, profile: { displayName: string }): any;
type Auth = any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegistrationDialogComponent, FormsModule], 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit { 
  // --- ESTADO DA UI E DO FORMULÁRIO (SIGNALS) ---
  isRegistrationDialogOpen = signal(false);
  isLoading = signal(false);
  messageText = signal('');
  messageType = signal<'success' | 'error' | null>(null);

  username = signal('');
  email = signal('');
  password = signal('');
  passwordConfirm = signal('');
  
  isUsernameValid = signal<boolean | null>(null);
  isEmailValid = signal<boolean | null>(null);
  isPasswordValid = signal<boolean | null>(null);
  isPasswordConfirmValid = signal<boolean | null>(null);

  // --- VARIÁVEIS DE SERVIÇO ---
  private auth!: Auth;

  constructor() {}
  
  ngOnInit(): void { 
  }

  // --- LÓGICA DE VALIDAÇÃO (COMPUTED SIGNALS e Métodos) ---
  
  checkPasswordRequirement = (type: 'uppercase' | 'lowercase' | 'number' | 'length'): boolean => {
      const p = this.password();
      switch (type) {
          case 'length': return p.length >= 6;
          case 'uppercase': return /[A-Z]/.test(p);
          case 'lowercase': return /[a-z]/.test(p);
          case 'number': return /\d/.test(p);
          default: return false;
      }
  }

  usernameError = computed(() => this.isUsernameValid() === false ? "O nome de usuário deve ter entre 3 e 30 caracteres." : null);
  emailError = computed(() => this.isEmailValid() === false ? "Por favor, insira um email válido." : null);
  passwordError = computed(() => this.isPasswordValid() === false ? "A senha não atende a todos os requisitos de segurança." : null);
  passwordConfirmError = computed(() => this.isPasswordConfirmValid() === false ? "As senhas não coincidem ou a senha primária é inválida." : null);

  isFormValid = computed(() => {
    return this.isUsernameValid() === true &&
           this.isEmailValid() === true &&
           this.isPasswordValid() === true &&
           this.isPasswordConfirmValid() === true;
  });

  // --- MÉTODOS DE MANIPULAÇÃO ---

  updateFieldFromChild(event: { field: string, value: string }): void {
      const fieldSignal = (this as any)[event.field];
      if (fieldSignal && typeof fieldSignal.set === 'function') {
          fieldSignal.set(event.value);
          this.validateField(event.field as any);
      }
  }

  validateField(field: 'username' | 'email' | 'password' | 'passwordConfirm'): void {
      const value = this[field]();
      
      switch (field) {
        case 'username':
          this.isUsernameValid.set(value.length >= 3 && value.length <= 30);
          break;
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          this.isEmailValid.set(emailRegex.test(value));
          break;
        case 'password':
          const isComplexValid = this.checkPasswordRequirement('length') &&
                                 this.checkPasswordRequirement('uppercase') &&
                                 this.checkPasswordRequirement('lowercase') &&
                                 this.checkPasswordRequirement('number');
          this.isPasswordValid.set(isComplexValid);
          this.validateField('passwordConfirm');
          break;
        case 'passwordConfirm':
          this.isPasswordConfirmValid.set(value === this.password() && this.isPasswordValid() === true);
          break;
      }
  }

  async handleRegistration(): Promise<void> {
    if (!this.isFormValid()) {
        this.showMessage("Corrija os erros antes de continuar.", 'error');
        return;
    }

    this.isLoading.set(true);
    
    // Simulação de sucesso
    setTimeout(() => {
      this.showMessage(`Conta criada para ${this.username()}. Bem-vindo!`, 'success');
      this.isLoading.set(false);
      setTimeout(() => this.openDialog(false), 1500);
    }, 2000);
  }

  openDialog(isOpen: boolean): void {
    this.isRegistrationDialogOpen.set(isOpen);
    this.messageText.set('');
    this.messageType.set(null);
    if (isOpen) {
      // Reseta o estado
      this.username.set('');
      this.isUsernameValid.set(null);
      this.email.set('');
      this.password.set('');
      this.passwordConfirm.set('');
      this.isEmailValid.set(null);
      this.isPasswordValid.set(null);
      this.isPasswordConfirmValid.set(null);
    }
  }

  showMessage(text: string, type: 'success' | 'error'): void {
    this.messageText.set(text);
    this.messageType.set(type);
  }

  getMessageClass = (): string => {
    const type = this.messageType();
    if (type === 'error') return 'bg-red-900 text-red-300 border border-red-500';
    if (type === 'success') return 'bg-green-700 text-green-100 border border-green-500';
    return '';
  }
}