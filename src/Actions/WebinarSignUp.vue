<template>
    <div class="signup-container">
        <h2 class="signup-title">{{ signup.title }}</h2>

        <form class="signup-form" @submit.prevent="submitForm">
            <label>{{ signup.fields.name }}</label>
            <input v-model="form.name" type="text" required />

            <label>{{ signup.fields.email }}</label>
            <input v-model="form.email" type="email" required />

            <label class="choose-label">{{ signup.labels.choose }}</label>
            <div class="checkbox-group">
                <label v-for="session in project.details.sessions" :key="session.id">
                    <input type="checkbox" v-model="form.selected" :value="session.id" />
                    {{ session.title }} ({{ session.date }}) — {{ session.price }} zł
                </label>
            </div>

            <div class="total">
                {{ signup.labels.total }} <strong>{{ totalPrice }} zł</strong>
            </div>

            <div class="newsletter">
                <label>
                    <input type="checkbox" v-model="form.newsletter" />
                    {{ signup.labels.newsletter }}
                </label>
            </div>

            <div class="terms">
                <label>
                    <input type="checkbox" v-model="form.terms" required />
                    {{ signup.labels.terms }}
                    <a :href="signup.links.terms" target="_blank">{{ signup.labels.termsLink }}</a>
                    oraz
                    <a :href="signup.links.rodo" target="_blank">{{ signup.labels.rodoLink }}</a>.
                </label>
            </div>

            <button type="submit" class="cta-button">
                {{ signup.labels.submit }}
            </button>
        </form>

        <div class="payment-info">
            <h3>{{ signup.payment.title }}</h3>
            <pre>{{ signup.payment.account }}</pre>
            <p>
                Potwierdzenie przelewu prosimy wysłać na:
                <a :href="`mailto:${signup.payment.email}`">{{ signup.payment.email }}</a>
            </p>
            <p>{{ signup.payment.note }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import langState from '@/lang/langState'

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})

const signup = langState.t.main.signup

const form = ref({
    name: '',
    email: '',
    selected: [],
    newsletter: false,
    terms: false,
})

const totalPrice = computed(() =>
    form.value.selected.reduce((sum, id) => {
        const session = props.project.details.sessions.find((s) => s.id === id)
        return sum + (session ? session.price : 0)
    }, 0)
)

async function submitForm() {
    if (!form.value.selected.length) {
        alert('Wybierz przynajmniej jeden webinar.')
        return
    }
    console.log('Zgłoszenie:', form.value)
    const payload = {
        name: form.value.name,
        email: form.value.email,
        selected: form.value.selected.map(id => {
            const session = props.project.details.sessions.find(s => s.id === id)
            return session ? session.title : id
        }),
        total: totalPrice.value,
        newsletter: form.value.newsletter,
        project: props.project.title,
    }

    try {
        const response = await fetch('/.netlify/functions/sendToSheets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        const result = await response.json()
        if (result.success) {
            alert('Dziękujemy! Otrzymasz potwierdzenie z danymi do przelewu na e-mail.')
            resetForm()
        } else {
            alert('Wystąpił błąd podczas wysyłki. Spróbuj ponownie później.')
        }
    } catch (error) {
        console.error(error)
        alert('Nie udało się połączyć z serwerem Google.')
    }
}

</script>

<style scoped>
/* identyczne style jak wcześniej — spójny wygląd z WebinarDetails.vue */
.signup-container {
    background: #faf9fb;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 6px 24px rgba(91, 44, 111, 0.15);
    color: #333;
}

.signup-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--violet);
    margin-bottom: 1.5rem;
}

.signup-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.signup-form label {
    font-weight: 600;
    color: var(--violet);
    font-size: 0.95rem;
}

.signup-form input[type='text'],
.signup-form input[type='email'] {
    width: 100%;
    padding: 0.7rem 1rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: white;
    transition: border 0.2s ease;
}

.signup-form input:focus {
    border-color: var(--violet);
    outline: none;
    box-shadow: 0 0 0 3px rgba(91, 44, 111, 0.15);
}

.checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.checkbox-group label {
    font-weight: 500;
    color: #333;
}

.total {
    font-weight: 600;
    color: var(--violet);
    font-size: 1rem;
    margin-top: 0.5rem;
}

.newsletter,
.terms {
    font-size: 0.9rem;
    line-height: 1.4;
    color: #444;
}

.terms a {
    color: var(--violet);
    text-decoration: underline;
}

.cta-button {
    align-self: flex-start;
    background: var(--violet);
    color: #fff;
    font-size: 1rem;
    padding: 0.8rem 1.6rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;
    box-shadow: 0 4px 14px rgba(142, 68, 173, 0.25);
}

.cta-button:hover {
    background: #732d91;
}

.payment-info {
    margin-top: 2rem;
    background: #f6f1fa;
    border-left: 5px solid var(--violet);
    padding: 1.2rem 1.5rem;
    border-radius: 10px;
    font-size: 0.95rem;
    color: #333;
}

.payment-info h3 {
    color: var(--violet);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.payment-info pre {
    background: transparent;
    white-space: pre-line;
    font-family: inherit;
    font-size: 0.9rem;
    margin: 0 0 0.5rem 0;
}

.payment-info a {
    color: var(--violet);
    font-weight: 600;
    text-decoration: none;
}

.payment-info a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .signup-container {
        padding: 1.5rem;
    }

    .signup-title {
        text-align: center;
        font-size: 1.5rem;
    }

    .cta-button {
        width: 100%;
        text-align: center;
    }

    .payment-info {
        font-size: 0.9rem;
    }
}
</style>
