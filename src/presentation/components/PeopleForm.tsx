// src/app/components/PeopleForm.tsx
import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {PeopleService} from "../../domain/services/people/people";

export default function PeopleForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', age: '', });

    useEffect(() => {
        if (id) {
            const fetchPerson = async () => {
                try {
                    const person = await PeopleService.getPeopleById(Number(id));
                    setFormData({ name: person.name, email: person.email, phone: person.phone, age: person.age.toString() });
                } catch (error) {
                    console.error('Error fetching person:', error);
                }
            };
            fetchPerson();
        }
    }, [id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (id) {
                await PeopleService.updatePeople(Number(id), { ...formData, age: Number(formData.age) });
            } else {
                await PeopleService.createPeople({ ...formData, age: Number(formData.age) });
            }
            navigate('/people');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center" gap={3} mt={4}>
                <Typography variant="h4">{id ? 'Edit Person' : 'Add New Person'}</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Celular"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Idade"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        {id ? 'Update Person' : 'Create Person'}
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
