"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";
import { formatRut, validateRut } from "@/src/utils/rut";

const EASE = [0.32, 0.72, 0, 1] as const;

const stepsConfig = [
  { num: 1, label: "Preferencias", title: "Cuéntanos qué buscas", subtitle: "Selecciona tu Isapre actual y el tipo de plan que necesitas." },
  { num: 2, label: "Contacto", title: "Tus datos de contacto", subtitle: "Un asesor certificado te contactará en menos de 30 minutos." },
  { num: 3, label: "Resumen", title: "Confirma tu cotización", subtitle: "Revisa que todo esté correcto antes de enviar." },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [isapre, setIsapre] = useState("Colmena");
  const [planType, setPlanType] = useState("Individual");
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isapreOptions = [
    { value: "Colmena", label: "Colmena" },
    { value: "CruzBlanca", label: "CruzBlanca" },
    { value: "Consalud", label: "Consalud" },
    { value: "Banmédica", label: "Banmédica" },
    { value: "Vida Tres", label: "Vida Tres" },
    { value: "Nueva Masvida", label: "Nueva Masvida" },
    { value: "Esencial", label: "Esencial" },
    { value: "Fonasa/Ninguna", label: "Fonasa / Ninguna" },
  ];

  const planTypeOptions = [
    { value: "Individual", label: "Plan Individual" },
    { value: "Familiar", label: "Plan Familiar" },
    { value: "Planes Jóvenes", label: "Planes Jóvenes" },
  ];

  const currentStep = stepsConfig[step - 1];
  const progressPercent = ((step - 1) / (stepsConfig.length - 1)) * 100;

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRut(e.target.value);
    setRut(formatted);
    if (validateRut(formatted)) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.rut;
        return copy;
      });
    }
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!nombre.trim() || nombre.trim().length < 3) {
      newErrors.nombre = "Por favor ingresa tu nombre completo.";
    }
    if (!validateRut(rut)) {
      newErrors.rut = "RUT no válido (usa formato 12.345.678-9).";
    }
    const cleanedPhone = telefono.replace(/\s+/g, "");
    if (!cleanedPhone || cleanedPhone.length !== 9 || !cleanedPhone.startsWith("9")) {
      newErrors.telefono = "Ingresa 9 dígitos comenzando con 9 (ej. 9 1234 5678).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setErrors({ consent: "Debes aceptar las políticas de privacidad para continuar." });
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div
      id="quote-form"
      className="w-full bg-white/80 border border-border p-2 rounded-2xl backdrop-blur-md shadow-premium-xl"
    >
      <div className="bg-white rounded-2xl flex flex-col overflow-hidden shadow-premium-sm">
        {/* Header del card — estilo referencia */}
        <div className="px-6 md:px-8 pt-6 pb-4 border-b border-border bg-bg-soft/40">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-premium-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-extrabold text-navy leading-tight">
                  Cotizador de Isapres
                </h2>
                <p className="text-sm text-muted mt-0.5">Actualizado · Junio 2026</p>
              </div>
            </div>
            {!success && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold bg-emerald/10 text-emerald border border-emerald/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                En vivo
              </span>
            )}
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-6">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-6 gap-5"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-premium-md">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-extrabold text-navy">¡Solicitud enviada!</h3>
                <p className="text-base text-muted max-w-sm leading-relaxed">
                  Un ejecutivo experto te contactará por WhatsApp o llamada en los próximos minutos
                  con hasta 3 opciones personalizadas.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Progreso */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-navy">
                    Paso {step} de {stepsConfig.length}
                  </span>
                  <span className="text-muted font-medium">{currentStep.label}</span>
                </div>
                <div className="w-full h-2 bg-bg-soft rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-brand"
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.4, ease: EASE }}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Título del paso actual */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-extrabold text-navy">{currentStep.title}</h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">{currentStep.subtitle}</p>
              </div>

              {/* Campos */}
              <div className="min-h-[220px]">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="flex flex-col gap-5"
                    >
                      <Select
                        large
                        label="¿Cuál es tu Isapre actual?"
                        hint="Si no tienes Isapre, selecciona Fonasa / Ninguna"
                        options={isapreOptions}
                        value={isapre}
                        onChange={(e) => setIsapre(e.target.value)}
                      />
                      <Select
                        large
                        label="¿Qué tipo de plan buscas?"
                        hint="Te mostraremos opciones según tu perfil familiar"
                        options={planTypeOptions}
                        value={planType}
                        onChange={(e) => setPlanType(e.target.value)}
                      />
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="flex flex-col gap-5"
                    >
                      <Input
                        large
                        label="Nombre completo"
                        placeholder="Ej. María Fernanda Rojas"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        error={errors.nombre}
                      />
                      <Input
                        large
                        label="RUT"
                        placeholder="Ej. 12.345.678-9"
                        hint="Lo usamos para cotizar planes personalizados"
                        value={rut}
                        onChange={handleRutChange}
                        error={errors.rut}
                      />
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-navy">Teléfono / WhatsApp</label>
                        <div className="flex items-center border border-border rounded-2xl overflow-hidden shadow-premium-sm focus-within:ring-4 focus-within:ring-navy/5 focus-within:border-navy transition-all">
                          <div className="bg-bg-soft px-4 py-3 border-r border-border text-sm font-bold text-navy select-none min-h-[48px] flex items-center">
                            🇨🇱 +56
                          </div>
                          <input
                            type="tel"
                            placeholder="9 1234 5678"
                            value={telefono}
                            onChange={(e) =>
                              setTelefono(e.target.value.replace(/\D/g, "").slice(0, 9))
                            }
                            className="w-full text-base px-4 min-h-[48px] outline-none text-navy bg-transparent placeholder:text-slate-400"
                          />
                        </div>
                        {!errors.telefono && (
                          <span className="text-xs text-muted">Te contactaremos por este número</span>
                        )}
                        {errors.telefono && (
                          <span className="text-xs font-semibold text-red-500">{errors.telefono}</span>
                        )}
                      </div>
                      <Input
                        large
                        label="Correo electrónico"
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={errors.email}
                      />
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="flex flex-col gap-5"
                    >
                      <div className="bg-bg-soft rounded-2xl p-5 border border-border flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-navy uppercase tracking-wider">
                          Resumen de tu cotización
                        </h4>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                          <span className="text-muted">Isapre actual</span>
                          <span className="font-bold text-navy text-right">{isapre}</span>
                          <span className="text-muted">Tipo de plan</span>
                          <span className="font-bold text-navy text-right">{planType}</span>
                          <span className="text-muted">Nombre</span>
                          <span className="font-bold text-navy text-right truncate">{nombre}</span>
                          <span className="text-muted">RUT</span>
                          <span className="font-bold text-navy text-right font-mono">{rut}</span>
                          <span className="text-muted">Celular</span>
                          <span className="font-bold text-navy text-right font-mono">+56 {telefono}</span>
                          <span className="text-muted">Email</span>
                          <span className="font-bold text-navy text-right truncate">{email}</span>
                        </div>
                      </div>

                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="w-5 h-5 mt-0.5 rounded-md text-mint border-border focus:ring-mint cursor-pointer"
                        />
                        <span className="text-sm text-muted leading-relaxed">
                          Acepto ser contactado por un asesor experto para recibir la comparativa de
                          planes de Isapre de forma gratuita.
                        </span>
                      </label>
                      {errors.consent && (
                        <span className="text-xs font-semibold text-red-500">{errors.consent}</span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Botones */}
              <div className="flex gap-3 pt-2">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={handleBack} className="px-6 text-base">
                    Volver
                  </Button>
                )}
                {step < 3 ? (
                  <Button type="button" onClick={handleNext} className="flex-1 text-base">
                    Continuar
                  </Button>
                ) : (
                  <Button type="submit" loading={loading} className="flex-1 text-base">
                    Enviar cotización gratis
                  </Button>
                )}
              </div>
            </form>
          )}

          {/* Mini stats de confianza — referencia */}
          {!success && (
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              {[
                { value: "30 min", label: "Respuesta" },
                { value: "100%", label: "Gratis" },
                { value: "7", label: "Isapres" },
              ].map((item) => (
                <div key={item.label} className="text-center py-2">
                  <p className="text-lg font-extrabold text-navy">{item.value}</p>
                  <p className="text-xs text-muted font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
